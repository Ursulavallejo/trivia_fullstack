import { useEffect, useState } from 'react'
import StatBar from './components/StatBar'
import QuestionComponent from './components/Question'

// import styles from './App.module.scss'

// import './App.css'

function App() {
  const [data, setData] = useState([])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)

  const [waitingToAdvance, setWaitingToAdvance] = useState(false)

  const onSubmit = (correct) => {
    if (correct) setCorrectAnswers(correctAnswers + 1)
    else setIncorrectAnswers(incorrectAnswers + 1)

    setWaitingToAdvance(true)
  }

  const advance = () => {
    setWaitingToAdvance(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log(result)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <div>
        <StatBar
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={data.length}
          correct={correctAnswers}
          incorrect={incorrectAnswers}
        />
        <QuestionComponent
          question={data[currentQuestionIndex]?.question}
          correctAnswer={data[currentQuestionIndex]?.correctanswer}
          incorrectAnswers={[
            data[currentQuestionIndex]?.incorrectanswer1,
            data[currentQuestionIndex]?.incorrectanswer2,
            data[currentQuestionIndex]?.incorrectanswer3,
          ]}
          onSubmit={onSubmit}
        />
        {waitingToAdvance && (
          <button onClick={advance}>NEXT Question ...</button>
        )}
        <h1>Trivia</h1>
        {data.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            <h2>{item.question}</h2>
            <ul>
              <li>Correct Answer: {item.correctanswer}</li>
              <li>Incorrect Answer 1: {item.incorrectanswer1}</li>
              <li>Incorrect Answer 2: {item.incorrectanswer2}</li>
              <li>Incorrect Answer 3: {item.incorrectanswer3}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
