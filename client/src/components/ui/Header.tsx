import { changeLanguage } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [lang, setLang] = useState('SRB');
  const { t } = useTranslation('home')
  const navigate = useNavigate()

  const changeLng = (lng: string) => {
    setLang(lng)
  }

  const homeRoute = () => {
    navigate('/')
  }

  return (
    <>
      <div className="absolute left-5 lg:left-10 top-5 text-3xl text-white hover:text-zinc-300 font-semibold cursor-pointer select-none duration-200" onClick={homeRoute}>
        { t('home') }
      </div>
      <div className="flex gap-2 text-white font-semibold text-2xl absolute right-5 lg:right-10 top-5 cursor-pointer select-none duration-200">
        {
          lang === 'SRB' ? 
          <>
            <h3 onClick={() => changeLanguage('sr')} className="text-purple-100">SRB</h3>
            <h3>|</h3>
            <h3 onClick={() => changeLanguage('en')} onClickCapture={() => changeLng('ENG')}>ENG</h3>
          </>
          :
          <>
            <h3 onClick={() => changeLanguage('sr')} onClickCapture={() => changeLng('SRB')}>SRB</h3>
            <h3>|</h3>
            <h3 onClick={() => changeLanguage('en')}className="text-purple-100">ENG</h3>
          </>
        }
        
      </div>
    </>
  )
}
