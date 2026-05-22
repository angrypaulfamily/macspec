module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { license_key } = req.body || {};

  if (!license_key || typeof license_key !== 'string' || !license_key.trim()) {
    return res.status(400).json({ success: false, message: 'License key is required' });
  }

  try {
    const params = new URLSearchParams({
      product_id: '_VoKk0PDmGozRE-s0a1v5Q==',
      license_key: license_key.trim(),
      increment_uses_count: 'true',
    });

    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

    if (!data.success) {
      console.error('Gumroad verification failed:', JSON.stringify({
        http_status: response.status,
        gumroad_response: data,
        license_key_used: license_key.trim(),
        product_id: '_VoKk0PDmGozRE-s0a1v5Q==',
      }));
      return res.status(200).json(data);
    }

    const uses = data.uses ?? 0;
    if (uses > 5) {
      console.error('License key exceeded max activations:', JSON.stringify({
        license_key_used: license_key.trim(),
        uses,
      }));
      return res.status(200).json({
        success: false,
        message: 'This key has already been activated on 5 devices.',
      });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Gumroad verification error:', error.message, error.stack);
    return res.status(500).json({
      success: false,
      message: 'Verification service unavailable. Please try again.',
      debug_error: error.message,
    });
  }
};
