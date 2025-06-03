import { useTranslation } from "react-i18next"
import Button from "../components/ui/Button";
import Background from "../components/ui/Background";

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <Background>
      <Button text={t('byQuestion')} route='/question' />
      <Button text={t('sim')} route='/simulation' />
      <Button text={t('soon')} isDisabled={true} route='/' />
    </Background>
  )
}
