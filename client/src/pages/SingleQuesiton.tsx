import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Question from '../components/Question'
import Button from '../components/ui/Button'
import Background from '../components/ui/Background';

export default function SingleQuesiton() {
  const { t } = useTranslation('question');
  const { id } = useParams();

  return (
    <>
      <Background>
        <div className='my-22 xl:my-0 gap-5 lg:gap-0 w-full h-full flex flex-col justify-around items-center'>
          <Question id={id} />
          <Button text={t('new')} route='/question' />
        </div>
      </Background>
    </>
  )
}
