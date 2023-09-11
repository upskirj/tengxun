let body = JSON.parse($response.body);
body["is_premium"] = true;
$done({ body: JSON.stringify(body) });