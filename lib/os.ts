const ua = navigator.userAgent.toLocaleLowerCase();

const android = /(?:android)/.test(ua);
// const isAndroid = true;
const firefox = /(?:firefox)/.test(ua);
const chrome = /(?:chrome|crios)/.test(ua);
const safari = /(safari)/.test(ua);
const tablet =
  /(?:ipad|playbook)/.test(ua) ||
  (android && !/(?:mobile)/.test(ua)) ||
  (firefox && /(?:tablet)/.test(ua));
const ios = /(?:iphone)/.test(ua) && !tablet;
const desktop = !ios && !android;
const phone = !desktop;
const wechat = phone && /(micromessenger|wechat)/.test(ua);

// 获取是否是 ios 或 android

export const os = {
  android,
  firefox,
  chrome,
  tablet,
  ios,
  wechat,
  desktop,
  phone,
  safari,
};
