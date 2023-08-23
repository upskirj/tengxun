
// ==UserScript==
// @name         百度网盘SVIP模拟（简化版）
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  简化版模拟百度网盘SVIP效果
// @author       Your Name
// @match        https://pan.baidu.com/*
// @grant        none
// ==/UserScript==
/**
[rewrite_local]
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/upskirj/tengxun/main/1baidupan.js
*/
(function() {
    'use strict';

    const originalFunc = window.require;

    window.require = function(module) {
        if (module.indexOf('function-widget-1.4.1.js') > -1) {
            window.FileUtils = {
                superVip: 1
            };
        }
        return originalFunc.apply(this, arguments);
    };
})();

