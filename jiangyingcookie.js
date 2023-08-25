// 获取请求的头部信息
var header = $request.headers;

// 检查Cookie字段是否存在
if(header['Cookie']){
    // 获取原始的Cookie值
    var originalCookie = header['Cookie'];

    // 在原始Cookie的基础上添加你想要的内容
    var newCookie = originalCookie + '; your_custom_cookie=123456789';

    // 修改请求头部的Cookie字段
    header['Cookie'] = newCookie;

    // 更新请求的头部信息
    $done({headers: header});
}else{
    $done({});
}
