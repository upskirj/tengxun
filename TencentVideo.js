var obj = JSON.parse($response.body);
obj["is_vip"] = 1;
$done({body: JSON.stringify(obj)});