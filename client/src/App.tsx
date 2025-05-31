import { useTranslation } from "react-i18next"

export default function App() {
  const { t } = useTranslation('common')
  return(
    <div>
      <h1>{t('test')}</h1>
    </div>
  )
}