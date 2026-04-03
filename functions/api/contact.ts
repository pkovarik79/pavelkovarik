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

    const from = 'Pavel Kovařík <mail@pavelkovarik.cz>';
    const to = 'mail@pavelkovarik.cz';
    const subject = `Poptávka AI školení: ${company || name}`;

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
      <div style="font-family:Segoe UI,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1f2937">
        <h1 style="font-size:24px;line-height:1.2;margin:0 0 20px;color:#0e2c6b">Nová poptávka AI školení</h1>
        <table style="width:100%;border-collapse:collapse;margin:0 0 24px">
          <tr><td style="padding:8px 0;font-weight:700;width:180px">Jméno</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Firma / organizace</td><td style="padding:8px 0">${escapeHtml(company || '-')}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">E-mail</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Telefon</td><td style="padding:8px 0">${escapeHtml(phone || '-')}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Velikost skupiny</td><td style="padding:8px 0">${escapeHtml(teamSize || '-')}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Preferovaný termín</td><td style="padding:8px 0">${escapeHtml(preferredDate || '-')}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Preferovaný formát</td><td style="padding:8px 0">${escapeHtml(preferredFormat || '-')}</td></tr>
          <tr><td style="padding:8px 0;font-weight:700">Zájem o školení</td><td style="padding:8px 0">${escapeHtml(interests.length ? interests.join(', ') : '-')}</td></tr>
        </table>
        <h2 style="font-size:18px;margin:0 0 10px;color:#0e2c6b">Poznámka / dotaz</h2>
        <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:16px">${escapeHtml(message || '-')}</div>
      </div>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
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

    return json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return json({ ok: false, error: 'Došlo k chybě při odeslání formuláře.' }, 500);
  }
};
