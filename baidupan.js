/**
[rewrite_local]
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/upskirj/tengxun/main/baidupan.js
*/
var body = $response.body;
var obj = JSON.parse(body);

if (obj.hasOwnProperty("product_infos")) {
    for (var i = obj.product_infos.length - 1; i >= 0; i--) {
        var product_info = obj.product_infos[i];
        if (product_info.hasOwnProperty("renewable_count")) {
            product_info.renewable_count = 9999;
        }
        if (product_info.hasOwnProperty("count")) {
            product_info.count = 9999;
        }
        if (product_info.hasOwnProperty("buy_time")) {
            product_info.buy_time = 1679685294;
        }
        if (product_info.hasOwnProperty("end_time")) {
            product_info.end_time = 1916158294;
        }
    }
}

$done({body: JSON.stringify(obj)});
