import { changeLanguage } from "i18next";
import { useState } from "react";

export default function ChangeLanguage() {
  const [lang, setLang] = useState('SRB');

  const handleClick = (lng: string) => {
    setLang(lng)
  }

  return (
    <div className="flex gap-2 text-white font-semibold text-2xl absolute right-5 top-5 cursor-pointer select-none lg:right-10">
      {
        lang === 'SRB' ? 
        <>
          <h3 onClick={() => changeLanguage('sr')} className="text-purple-100">SRB</h3>
          <h3>|</h3>
          <h3 onClick={() => changeLanguage('en')} onClickCapture={() => handleClick('ENG')}>ENG</h3>
        </>
        :
        <>
          <h3 onClick={() => changeLanguage('sr')} onClickCapture={() => handleClick('SRB')}>SRB</h3>
          <h3>|</h3>
          <h3 onClick={() => changeLanguage('en')}className="text-purple-100">ENG</h3>
        </>
      }
      
    </div>
  )
}
