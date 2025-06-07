import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Submit from './ui/Submit';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [id, setId] = useState('');
  const { t } = useTranslation('question')
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newId = e.target.value;
    setId(newId);
  }

  const handleClick = () => {
    navigate(`/question/${id}`)
  }

  return (
    <div className='bg-purple-300 rounded-3xl w-11/12 lg:w-1/4 h-72 lg:h-52 flex flex-col justify-evenly items-center'>
      <input className="text-3xl w-11/12 border-2 rounded-2xl p-3 border-purple-200 placeholder-zinc-500 focus:outline-0" type='number' placeholder={t('inputText')} onChange={handleChange} />
      <Submit text={t('submit')} handleClick={handleClick}  />
    </div>
  )
}
