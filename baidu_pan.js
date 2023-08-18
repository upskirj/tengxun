let body = $response.body;

body = JSON.parse(body);
body.product_infos.forEach((product) => {
  if (product.product_id === "svip2") {
    product.product_id = "vip-gdfw";
    product.start_time = 1577811600;
    product.end_time = 1677811600;
  }
  if (product.product_id === "vip2") {
    product.product_id = "vip-gqzy";
    product.start_time = 1577811600;
    product.end_time = 1677811600;
  }
});

$done({ body: JSON.stringify(body) });