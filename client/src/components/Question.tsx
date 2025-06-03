import { useEffect, useState } from 'react'
import api from '../services/api/api'
import { useTranslation } from 'react-i18next'

interface Question {
  id: string,
  questionText: string,
  options: string[],
  answer: string[],
  points: number
}


const Question: React.FC<{ id: string | undefined }> = ({ id }) => {
  const [question, setQuestion] = useState<Question>({
    id: '',
    questionText: '',
    options: [''],
    answer: [''],
    points: 0
  });
  const [selected, setSelected] = useState<string[]>([])
  const [haveGuessed, setHaveGuessed] = useState(false)
  const [points, setPoints] = useState(0)
  const [loading, setLoading] = useState(true)
  const { t } = useTranslation('question');

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/question/${id}`)
      setLoading(false)

      setQuestion({
        id: result.data[0].id,
        questionText: result.data[0].text,
        options: result.data[0].options,
        answer: result.data[0].answer,
        points: result.data[0].points
      })

    }
    

    fetchData();
  }, [])

  const handleSelect = (optionText: string) => {
    setSelected([...selected, optionText])
  }

  const handleUnSelect = (optionText: string) => {
    const unSelectedArr = selected.filter(val => optionText !== val)
    setSelected(unSelectedArr)
  }

  const handleSubmit = () => {
    setHaveGuessed(true)
    const correctAnswers = selected.filter(val => question.answer.includes(val))
    //Checks if there is same amount of selected and selected correct answers and if not its 0 points
    if(correctAnswers.length === selected.length){
      //Check if there is same amount of selected and answers if there is thats all points, if not it gets splited
      if(selected.length === question.answer.length){
        setPoints(question.points)
      } else {
        const numberOfPoints = ((question.points / question.answer.length) * selected.length).toFixed(2)
        setPoints(Number(numberOfPoints))
      }
    }
  }

  if(loading){
    return (
      <div className='mb-10 size-44 animate-spin bg-purple-400 rounded-2xl'></div>
    )
  }

  if(question.id === ''){
    return <h2 className='text-6xl font-bold mb-5'>{ t('404') }</h2>
  }

  return (
    <div className='w-11/12 xl:w-2/4 h-5/6 flex flex-col justify-center items-start text-2xl select-none'>
      <h2 className='text-2xl self-end'>{question.points} {question.points === 1 ? t('point') : t('points')}</h2>
      <h2 className='text-3xl mb-3 -mt-1'>{question.id}. {question.questionText}</h2>
      {  
        !haveGuessed ?
        <>
          { 
            question.options.map((optionText, index) => (
              !selected.includes(optionText) ? 
              <button key={index} className='bg-purple-400 w-full rounded-3xl text-start p-3 mb-3' onClick={() => handleSelect(optionText)}>{optionText}</button>
              :
              <button key={index} className='bg-purple-300 w-full rounded-3xl text-start p-3 mb-3' onClick={() => handleUnSelect(optionText)}>{optionText}</button>
            ))
          }
          <button className='w-fit self-center p-5 bg-purple-200 rounded-3xl cursor-pointer hover:bg-purple-300 duration-500' onClick={handleSubmit}>{ t('submit') }</button>
        </>
        :
        <>
          {
            question.options.map((optionText, index) => (
              question.answer.includes(optionText) ?
              <button key={index} className='bg-purple-400 w-full rounded-3xl !cursor-default text-start p-3 mb-3 border-2  border-green-400'>{optionText}</button>
              :
              <button key={index} className='bg-purple-400 w-full rounded-3xl !cursor-default text-start p-3 mb-3 border-2 border-red-500'>{optionText}</button>
            ))
          }
          <h2 className='font-bold mb-3'>{ t('pointsEarnedMessage', points === 1 ? { number: points + ' ' + t('point') } : { number: points + ' ' + t('points') }) }</h2>
        </>
      }
    </div>
  )
}

export default Question