import { useState, useEffect } from 'react'
import Answers from './Answers'
import PropTypes from 'prop-types'

function QuestionComponent({
  question,
  correctAnswer,
  incorrectAnswers,
  onSubmit,
}) {
  const [shuffledChoices, setShuffledChoices] = useState([])

  useEffect(() => {
    const choices = [correctAnswer, ...incorrectAnswers]
    const shuffled = [...choices].sort(() => Math.random() - 0.5)
    setShuffledChoices(shuffled)
  }, [correctAnswer, incorrectAnswers])

  return (
    <div>
      <h3>{question}</h3>
      <Answers
        choices={shuffledChoices}
        correctAnswer={correctAnswer}
        onSubmit={onSubmit}
      />
    </div>
  )
}
QuestionComponent.propTypes = {
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default QuestionComponent
