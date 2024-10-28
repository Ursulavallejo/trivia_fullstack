import { useEffect, useState } from 'react'
import StatBar from './components/StatBar'
import QuestionComponent from './components/Question'
import Reset from './components/Reset'
import AddQuestionModal from './components/AddQuestionModal'

// import styles from './App.module.scss'

// import './App.css'

function App() {
  const [data, setData] = useState([])

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState(0)

  const [waitingToAdvance, setWaitingToAdvance] = useState(false)

  // To add new question >>

  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleAddQuestionModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const onSubmit = (correct) => {
    if (correct) setCorrectAnswers(correctAnswers + 1)
    else setIncorrectAnswers(incorrectAnswers + 1)

    setWaitingToAdvance(true)
  }

  const advance = () => {
    setWaitingToAdvance(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const fetchData = async () => {
    try {
      const response = await fetch('/api')
      const result = await response.json()
      setData(result)
      console.log(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const reset = () => {
    setCurrentQuestionIndex(0)
    setCorrectAnswers(0)
    setIncorrectAnswers(0)
    setWaitingToAdvance(false)
  }

  if (currentQuestionIndex >= data.length)
    return (
      <Reset
        totalQuestions={data.length}
        correctQuestions={correctAnswers}
        onPress={reset}
      />
    )

  return (
    <>
      <div>
        <button onClick={toggleAddQuestionModal}>Add New Question</button>
        {isModalOpen && (
          <AddQuestionModal
            onClose={toggleAddQuestionModal}
            onAdd={fetchData} // Asegúrate de que fetchData esté definido
          />
        )}
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
      </div>
    </>
  )
}

export default App
