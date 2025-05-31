import { useTranslation } from "react-i18next"
import Button from "../components/ui/Button";

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <div className="h-screen w-screen bg-linear-to-b from-purple-400 to-purple-100 flex justify-center items-center flex-col gap-5">
      <Button text={t('byquestion')} />
      <Button text={t('sim')} />
      <Button text={t('soon')} isDisabled={true} />
    </div>
  )
}
