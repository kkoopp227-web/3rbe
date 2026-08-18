window.enmity.plugins.registerPlugin({
  name: "ArabicDiscord",
  version: "1.0.4",
  description: "Translate Discord to Arabic.",
  color: "#00ff00",
  onStart: function() {
    try {
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
        "SERVER_BOOST": "تعزيز السيرفر",
        "NITRO": "نيترو",
        "ACCOUNT": "الحساب",
        "PROFILES": "الملفات الشخصية",
        "PRIVACY_AND_SAFETY": "الخصوصية والأمان",
        "AUTHORIZED_APPS": "التطبيقات المصرح بها",
        "CONNECTIONS": "الاتصالات",
        "FRIEND_REQUESTS": "طلبات الصداقة",
        "SCAN_QR_CODE": "مسح رمز QR",
        "GENERAL": "عام",
        "PLUGINS": "الإضافات",
        "THEMES": "السمات",
        "MANAGE_NITRO": "إدارة نيترو",
        "NITRO_GIFTING": "إهداء نيترو",
        "VOICE": "الصوت",
        "APPEARANCE": "المظهر",
        "ACCESSIBILITY": "إمكانية الوصول",
        "LANGUAGE": "اللغة",
        "TEXT_AND_IMAGES": "النصوص والصور",
        "NOTIFICATIONS": "الإشعارات",
        "LOGOUT": "تسجيل الخروج"
      };
      
      const i18n = window.enmity.modules.getByProps("Messages", "getLocale");
      if (i18n && i18n.Messages) {
        for (const key in arabicTranslations) {
          i18n.Messages[key] = arabicTranslations[key];
        }
      }
    } catch (e) {
      console.log("ArabicPlugin error:", e);
    }
  },
  onStop: function() {}
});
