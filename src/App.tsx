import React from 'react';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext';
import 'antd/dist/antd.css';
import "./styles/_main.scss";
import './App.css';
/* import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"; */

/* i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "welcomeMessage": "Welcome to React and react-i18next",
          "email":  "Email"
        }
      },
      ar:{
        translation:{
          "welcomeMessage": "Welcome to React in arabic",
          "email":  "Email in arabic"
        }
      }
    },
    lng: "ar", // if you're using a language detector, do not define the lng option
    fallbackLng: "ar",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  }); */
const App = () => {
  /* const { t } = useTranslation(); */
  return (
    <div>
      {/*  <h2>{t('welcomeMessage')}</h2>
      <h2>{t('email')}</h2> */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
