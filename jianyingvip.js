/**
[rewrite_local]
# Quantumult X 剪映VIP重写规则

# 替换请求头中的Cookie
^https:\/\/api\.jxjr\.huohaoshipin\.com\/api\/v\d\/user\/info url script-request-header https://raw.githubusercontent.com/upskirj/tengxun/main/jianyingvip.js

# 替换响应体中的VIP信息
^https:\/\/api\.jxjr\.huohaoshipin\.com\/api\/v\d\/user\/info url script-response-body https://raw.githubusercontent.com/upskirj/tengxun/main/jianyingvip.js
*/
// 将响应体转换为JSON格式
let body = JSON.parse($response.body);

// 修改VIP信息
body.data.vip_type = 2; // 2表示永久VIP

// 将修改后的JSON对象转换回字符串
let modifiedBody = JSON.stringify(body);

// 返回修改后的响应体
$done({body: modifiedBody});
