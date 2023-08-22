/**
[rewrite_local]
^https?://api\.wo\.com\.cn/client/ url script-response-body https://github.com/upskirj/tengxun/blob/4e16c221eab84ab694ea27a6e6f9ed21c0bf2887/10086.js

[mitm]
hostname = api.wo.com.cn
 */

let body = $response.body;

// 判断请求的URL是否包含中国移动开屏广告的关键字
if (body && /\"ad\":\"splash\"/.test(body)) {
    // 替换掉广告内容为空
    body = body.replace(/\"ad\":\"splash\"[^}]+}/g, "");
}

$done({ body });
