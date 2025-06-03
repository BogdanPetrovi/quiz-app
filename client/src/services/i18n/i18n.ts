import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHome from './en/home.json'
import srHome from './sr/home.json'
import enQuestion from './en/question.json'
import srQuestion from './sr/question.json'


i18next.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    en: {
      home: enHome,
      question: enQuestion
    },
    sr: {
      home: srHome,
      question: srQuestion
    }
  },
  lng: 'sr',
  fallbackLng: 'en',
  ns: ['home', 'question'],
  defaultNS: 'question',
  interpolation: {
    escapeValue: false
  }
})

export default i18next;