var body = $response.body;
var url = $request.url;

body = JSON.parse(body);

if (url.indexOf('userinfo') != -1 || url.indexOf('info.action') != -1) {
    body['data']['vip_type'] = 5;
    body['data']['is_vip'] = 1;
    body['data']['vip_end_time'] = 1679685294000;
}

body = JSON.stringify(body);
$done({ body });
