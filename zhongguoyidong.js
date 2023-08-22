// ==UserScript==
// @name         Remove China Mobile Ads
// @namespace    yournamespace
// @version      1.0
// @description  Remove China Mobile App Launch Ads in Quantumult X
// @author       Your Name
// @match        https://www.10086.cn/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const removeAds = () => {
    const ad = document.querySelector('.start-banner');
    if (ad) {
      ad.style.display = 'none';
    }
  };

  // Remove China Mobile App Launch Ads when DOMContentLoaded event is fired
  document.addEventListener('DOMContentLoaded', removeAds);

  // Remove China Mobile App Launch Ads when the page is fully loaded
  window.addEventListener('load', removeAds);
})();
