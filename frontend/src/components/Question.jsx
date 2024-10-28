import Answers from './Answers'

function QuestionComponent({ question, correctAnswer, incorrectAnswers }) {
  const choices = [correctAnswer, ...incorrectAnswers]
  const shuffledChoices = [...choices].sort(() => Math.random() - 0.5)
  return (
    <div>
      <h3>{question}</h3>
      <Answers choices={shuffledChoices} />
    </div>
  )
}

export default QuestionComponent
