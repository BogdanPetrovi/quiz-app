import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import Background from "../components/ui/Background";
import Submit from "../components/ui/Submit";

export default function NotFound() {
  const { t } = useTranslation('home')
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Background>
      <div className="bg-purple-300 p-10 rounded-lg flex flex-col gap-5 justify-center items-center">
        <h2 className='font-semibold text-4xl'>{t('notFound')}</h2>
        <Submit text={t('notFoundButton')} handleClick={handleClick} />
      </div>
    </Background>
  )
}
