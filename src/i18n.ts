import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locale/en.json";
import cn from "./locale/zh-cn.json";
import hk from "./locale/zh-hk.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  "en"    : { translation: en },
  "zh-CN" : { translation: cn },
  "zh-HK" : { translation: hk },
};

const langPath = window.location.pathname.split('/')[1];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    lng: langPath ?? 'en', 

    interpolation: {
      // react already safes from xss
      escapeValue: false
    }
  });

  export default i18n;
