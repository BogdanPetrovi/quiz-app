import { ChangeEvent, useState } from "react"
import api from "../services/api/api"
import './dataSubmission.css'

//Made a page to ease data submission to database. Simple UI, not for production
export default function dataSubmission() {
  const [question, setQuestion] = useState('')
  const [id, setId] = useState('')
  //correctAnswer state is for input value
  const [correctAnswer, setCorrectAnswer] = useState('')
  //correctAnswers state is for capturing correct answers, if there is multiple
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([])
  const [options, setOptions] = useState<string[]>(Array(8).fill(''))

  const handleQuestion = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value)
  }

  const handleId = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }

  const handleCorrectAnswer = (event: ChangeEvent<HTMLInputElement>) => {
    setCorrectAnswer(event.target.value)
    //if you put | in input, you can make multiple right answers
    if(event.target.value.includes('|')){
      const result = event.target.value.split("|")
      setCorrectAnswers(result)
    } else {
      setCorrectAnswers([event.target.value])
    }
  }

  const handleOption = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newOption = [...options]
    newOption[index] = event.target.value 
    setOptions(newOption)
  }

  const handleClick = async () => {
    if(question !== '' && correctAnswer !== '' && id !== ''){
      await api.post('/add', {
        question: question,
        id: id,
        answer: correctAnswers,
        options: options.filter(o => o !== ''),
      })
      setOptions(Array(8).fill(''))
      setCorrectAnswer('')
      setCorrectAnswers([])
      setId((Number(id) + 1).toString())
      setQuestion('')
    } else {
      console.log('Something went wrong')
    }
  }


  return (
    <div id='main'>
      <input type="text" placeholder='Question *' value={question} onChange={handleQuestion}  />
      <input type="text" placeholder='ID *' value={id} onChange={handleId}  />
      <input type="text" placeholder='Correct answer *' value={correctAnswer} onChange={handleCorrectAnswer}   />
      <h2>Options</h2>
      {
        options.map((val, index) => (
          <input type="text" placeholder={`Option ${index + 1}`} key={index} value={val} onChange={handleOption(index)} />
        ))
      }
      <div id='submit' onClick={handleClick}>Submit</div>
    </div>
  )
}