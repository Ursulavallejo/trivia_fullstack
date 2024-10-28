import Answers from './Answers'

function QuestionComponent({
  question,
  correctAnswer,
  incorrectAnswers,
  onSubmit,
}) {
  const choices = [correctAnswer, ...incorrectAnswers]
  const shuffledChoices = [...choices].sort(() => Math.random() - 0.5)
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

export default QuestionComponent
