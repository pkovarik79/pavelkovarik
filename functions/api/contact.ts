interface Env {
  RESEND_API_KEY: string;
}

const json = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    if (!env.RESEND_API_KEY) {
      return json({ ok: false, error: 'Server is not configured.' }, 500);
    }

    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return json({ ok: false, error: 'Invalid content type.' }, 415);
    }

    const payload = await request.json<Record<string, unknown>>();

    const name = String(payload.name ?? '').trim();
    const company = String(payload.company ?? '').trim();
    const email = String(payload.email ?? '').trim();
    const phone = String(payload.phone ?? '').trim();
    const teamSize = String(payload.teamSize ?? '').trim();
    const preferredDate = String(payload.preferredDate ?? '').trim();
    const preferredFormat = String(payload.preferredFormat ?? '').trim();
    const interests = Array.isArray(payload.interests)
      ? payload.interests.map((item) => String(item).trim()).filter(Boolean)
      : [];
    const message = String(payload.message ?? '').trim();
    const website = String(payload.website ?? '').trim();

    if (website) {
      return json({ ok: true });
    }

    if (!name || !email || !phone || !company) {
      return json({ ok: false, error: 'Vyplňte prosím jméno, e-mail, telefon a firmu.' }, 400);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return json({ ok: false, error: 'Zadejte prosím platný e-mail.' }, 400);
    }

    const fromAdmin = 'WEB pavelkovarik.cz <mail@pavelkovarik.cz>';
    const fromClient = 'Pavel Kovařík <mail@pavelkovarik.cz>';
    const to = 'mail@pavelkovarik.cz';
    const subject = `Nová poptávka školení AI – ${company || '-'} (${name})`;

    const text = [
      'Nová poptávka z formuláře na pavelkovarik.cz',
      '',
      `Jméno: ${name}`,
      `Firma / organizace: ${company || '-'}`,
      `E-mail: ${email}`,
      `Telefon: ${phone || '-'}`,
      `Velikost skupiny: ${teamSize || '-'}`,
      `Preferovaný termín: ${preferredDate || '-'}`,
      `Preferovaný formát: ${preferredFormat || '-'}`,
      `Zájem o školení: ${interests.length ? interests.join(', ') : '-'}`,
      '',
      'Poznámka / dotaz:',
      message || '-',
    ].join('\n');

    const html = `
      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1f2937;background:#f6f7fb;padding:24px">
        <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:24px">
          <h1 style="font-size:22px;line-height:1.3;margin:0 0 12px;color:#0e2c6b">Nová poptávka školení AI</h1>
          <p style="margin:0 0 18px;color:#6b7280">Zpráva z formuláře pavelkovarik.cz</p>
          <table style="width:100%;border-collapse:collapse;margin:0 0 18px">
            <tr><td style="padding:8px 0;color:#6b7280;width:190px">Jméno</td><td style="padding:8px 0;font-weight:700">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Firma / organizace</td><td style="padding:8px 0">${escapeHtml(company || '-')}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">E-mail</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}" style="color:#143f99">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Telefon</td><td style="padding:8px 0">${escapeHtml(phone || '-')}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Velikost skupiny</td><td style="padding:8px 0">${escapeHtml(teamSize || '-')}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Preferovaný termín</td><td style="padding:8px 0">${escapeHtml(preferredDate || '-')}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Preferovaný formát</td><td style="padding:8px 0">${escapeHtml(preferredFormat || '-')}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Zájem o školení</td><td style="padding:8px 0">${escapeHtml(interests.length ? interests.join(', ') : '-')}</td></tr>
          </table>
          <div style="margin-top:8px">
            <div style="font-weight:700;color:#0e2c6b;margin-bottom:8px">Poznámka / dotaz</div>
            <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:14px">${escapeHtml(message || '-')}</div>
          </div>
        </div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAdmin,
        to: [to],
        reply_to: email,
        subject,
        text,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error('Resend error:', errorBody);
      return json({ ok: false, error: 'Nepodařilo se odeslat formulář.' }, 502);
    }

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromClient,
        to: [email],
        subject: 'Děkuji za poptávku – ozvu se do 24 hodin',
        text: [
          'Dobrý den,',
          '',
          'děkuji Vám za poptávku na školení AI. Ozvu se do 24 hodin s návrhem obsahu a termínu.',
          '',
          'Shrnutí poptávky:',
          `Firma / organizace: ${company || '-'}`,
          `Počet lidí: ${teamSize || '-'}`,
          `Preferovaný termín: ${preferredDate || '-'}`,
          `Preferovaný formát: ${preferredFormat || '-'}`,
          `Zájem o školení: ${interests.length ? interests.join(', ') : '-'}`,
          '',
          'Pokud je to urgentní, zavolejte mi na +420 770 126 519.',
          '',
          'Pavel Kovařík',
        ].join('\n'),
        html: `
          <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1f2937;background:#f6f7fb;padding:24px">
            <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:24px">
              <h1 style="font-size:20px;line-height:1.3;margin:0 0 12px;color:#0e2c6b">Děkuji za poptávku</h1>
              <p style="margin:0 0 18px">Děkuji Vám za poptávku na školení AI. Ozvu se do 24 hodin s návrhem obsahu a termínu.</p>
              <div style="margin:18px 0 12px;font-weight:700;color:#0e2c6b">Shrnutí poptávky</div>
              <table style="width:100%;border-collapse:collapse;margin:0 0 16px">
                <tr><td style="padding:6px 0;color:#6b7280;width:180px">Firma / organizace</td><td style="padding:6px 0">${escapeHtml(company || '-')}</td></tr>
                <tr><td style="padding:6px 0;color:#6b7280">Počet lidí</td><td style="padding:6px 0">${escapeHtml(teamSize || '-')}</td></tr>
                <tr><td style="padding:6px 0;color:#6b7280">Preferovaný termín</td><td style="padding:6px 0">${escapeHtml(preferredDate || '-')}</td></tr>
                <tr><td style="padding:6px 0;color:#6b7280">Preferovaný formát</td><td style="padding:6px 0">${escapeHtml(preferredFormat || '-')}</td></tr>
                <tr><td style="padding:6px 0;color:#6b7280">Zájem o školení</td><td style="padding:6px 0">${escapeHtml(interests.length ? interests.join(', ') : '-')}</td></tr>
              </table>
              <p style="margin:0">Pokud je to urgentní, zavolejte mi na <a href="tel:+420770126519" style="color:#143f99">+420 770 126 519</a>.</p>
              <p style="margin:18px 0 0;font-weight:700">Pavel Kovařík</p>
            </div>
          </div>
        `,
      }),
    });

    return json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return json({ ok: false, error: 'Došlo k chybě při odeslání formuláře.' }, 500);
  }
};
