# 去除微信朋友圈广告重写规则
^https?://mp.weixin.qq.com/mp/getappmsgad url reject
^https?://mp.weixin.qq.com/mp/getappmsgadext url reject
^https?://mp.weixin.qq.com/mp/jsmonitor url reject

# 去除微信朋友圈广告重写脚本
// ==Script==
// @name         去除微信朋友圈广告重写脚本
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  去除微信朋友圈广告重写脚本，自动过滤朋友圈中的广告内容，提高用户体验。仅适用于Quantumult X等支持脚本的网络代理工具。注意：此脚本仅供学习交流使用，且可能会违反微信用户协议，使用前请自行评估风险并承担相应的法律责任。作者不对使用此脚本产生的任何后果负责。 
// @author       Your Name
// @match        *://mp.weixin.qq.com/*
// @grant        none
// ==/Script==

(function() {
    'use strict';

    const log = console.log.bind(console);

    function processNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SECTION') {
            const className = node.getAttribute('class') || '';
            if (className.indexOf('js_ad_dom') >= 0) {
                node.remove();
                return true;
            }
        }
        return false;
    }

    function processRoot(root) {
        let foundAd = false;
        let node = root.firstChild;
        while (node) {
            let nextNode = node.nextSibling;
            if (processNode(node)) {
                foundAd = true;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                if (processRoot(node)) {
                    foundAd = true;
                }
            }
            node = nextNode;
        }
        return foundAd;
    }

    function processPage() {
        const root = document.body;
        if (!root) {
            return;
        }
        const foundAd = processRoot(root);
        if (foundAd) {
            log('Removed WeChat Moment ad');
        }
    }

    processPage();

    const observer = new MutationObserver((mutationsList, observer) => {
        processPage();
    });

    observer.observe(document.body, { subtree: true, childList: true });
})();
