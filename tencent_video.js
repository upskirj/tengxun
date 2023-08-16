var body = $response.body;
var url = $request.url;

body = JSON.parse(body);

if (url.indexOf('getinfo') != -1) {
    body['fl'] = body['vl']['vi'][0]['cl']['ci'] = 1000;
    body['vl']['vi'][0]['ul']['ui'][0]['url'] = body['vl']['vi'][0]['ul']['ui'][0]['url'].replace(/http:/, 'https:');
    body['vl']['vi'][0]['hls']['main_url'] = body['vl']['vi'][0]['hls']['main_url'].replace(/http:/, 'https:');
}

body = JSON.stringify(body);
$done({ body });
