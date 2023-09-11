let body = $response.body;
let obj = JSON.parse(body);

// 修改用户类型
obj.user.userType = "premium";

// 修改用户计划信息
obj.user.plan = {
  "name": "Premium",
  "status": "active",
  "expires": "2099-12-31"
};

// 修改订阅信息
obj.subscription = {
  "status": "active",
  "expires": "2099-12-31",
  "cancelAtPeriodEnd": false
};

body = JSON.stringify(obj);
$done({ body });
