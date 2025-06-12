import { useEffect, useRef, useState } from 'react'
import Background from '../components/ui/Background'
import api from '../services/api/api'
import Question from '../components/Question';
import Loading from '../components/ui/Loading';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Simulation() {
  const [questionIds, setQuestionsIds] = useState([]);
  const [pointsWon, setPointsWon] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const hasRun = useRef(false)
  const { t } = useTranslation('question')
  const nav = useNavigate();

  useEffect(() => {
    const getQuestions = async () => {
      if(hasRun.current) return
      hasRun.current = true
      const result = await api.get('/simulation');
      setQuestionsIds(result.data)
      setLoading(false)
    }

    getQuestions();
  }, [])

  const handleSubmit = (guessPoints: number, questionPoints: number) => {
    setPointsWon(pointsWon + guessPoints)
    setShowNext(true)
    setMaxPoints(maxPoints + questionPoints)
  }

  const handleNext = () => {
    setAnswered(answered + 1)
    setShowNext(false)
  }

  if(loading){
    return <Loading />
  }

  if(answered >= 30) {
    return (
      <Background>
        <h2 className='font-bold text-4xl'>{ t('pointsEarnedMessage', { number: pointsWon + t('outOf') + `${String(maxPoints)} ` + t('points')})}</h2>
        <button className='bg-purple-200 hover:bg-purple-300 active:bg-purple-500 drop-shadow-2xl w-80 h-18 rounded-full text-4xl font-semibold duration-500' onClick={() => nav('/')}>
          { t('end') }
        </button>
      </Background>
    )
  }

  return (
    <Background>
      <div className='mt-22 xl:mt-0 w-full h-full flex justify-center items-center'>
        <Question 
          id={ questionIds[answered] }
          onSubmit={(points, maxPoints) => handleSubmit(points, maxPoints)}
        />
      </div>
      {
        showNext &&
        <button className='bg-purple-200 hover:bg-purple-300 active:bg-purple-500 drop-shadow-2xl w-64 h-18 rounded-full text-4xl font-semibold duration-500' onClick={handleNext}>{ t('next') }</button>
      }
    </Background>
  )
}
