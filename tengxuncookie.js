const axios = require('axios');

async function getTencentCookie() {
  try {
    // 发送请求以获取腾讯视频的 Cookie 值
    const response = await axios.get('https://www.tencentvideo.com/');
    
    // 从响应头中获取 Set-Cookie 字段的值
    const cookies = response.headers['set-cookie'];
    
    // 提取腾讯视频的 Cookie 值
    const tencentCookie = cookies.find(cookie => cookie.includes('tencentvideo_uid'));
    
    // 输出腾讯视频的 Cookie 值
    console.log(`腾讯视频的 Cookie 值为：${tencentCookie}`);
  } catch (error) {
    console.log('获取腾讯视频 Cookie 值时出错：', error.message);
  }
}

// 执行函数以获取腾讯视频的 Cookie 值
getTencentCookie();
