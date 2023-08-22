var body = $response.body;
var obj = JSON.parse(body);
if (obj.data) {
    obj.data.is_vip = 1;
    obj.data.vip_end_time = 1788000000;
}
body = JSON.stringify(obj);
$done({body});