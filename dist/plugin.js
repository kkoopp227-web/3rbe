var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var enmity = window.enmity;

const arabicTranslations = {
  "SETTINGS": "الإعدادات",
  "USER_SETTINGS": "إعدادات المستخدم",
  "FRIENDS": "الأصدقاء",
  "SEARCH": "بحث",
  "ONLINE": "متصل",
  "ALL": "الكل",
  "PENDING": "قيد الانتظار",
  "BLOCKED": "محظور",
  "ADD_FRIEND": "إضافة صديق",
  "MESSAGES": "الرسائل"
};

var src_default = {
  name: "ArabicDiscord",
  version: "1.0.0",
  description: "Translates Discord to Arabic",
  color: "#00ff00",
  onStart() {
    const i18n = enmity.modules.getByProps("Messages", "getLocale");
    if (i18n && i18n.Messages) {
      for (const key in arabicTranslations) {
        if (i18n.Messages[key]) {
          i18n.Messages[key] = arabicTranslations[key];
        }
      }
    }
  },
  onStop() {
    // Cannot easily unpatch dictionary without storing original
  }
};
