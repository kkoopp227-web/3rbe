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
  "MESSAGES": "الرسائل",
  "SERVER_BOOST": "تعزيز السيرفر"
};

const ArabicPlugin = {
  name: "ArabicDiscord",
  version: "1.0.1",
  description: "ترجمة ديسكورد للعربية",
  color: "#00ff00",
  onStart() {
    try {
      // جلب مكتبة الترجمة الخاصة بديسكورد
      const i18n = window.enmity.modules.getByProps("Messages", "getLocale");
      if (i18n && i18n.Messages) {
        for (const key in arabicTranslations) {
          if (i18n.Messages[key]) {
            i18n.Messages[key] = arabicTranslations[key];
          }
        }
      }
    } catch (e) {
      console.error("ArabicPlugin error:", e);
    }
  },
  onStop() {
    // إيقاف البلوقن
  }
};

// صيغة التصدير المعتمدة في Enmity
module.exports = {
  default: ArabicPlugin
};
