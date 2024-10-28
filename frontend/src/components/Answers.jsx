import { useState, useEffect } from 'react'
import Answer from './Answer'

function Answers({ choices, correctAnswer, onSubmit, hasAnswered }) {
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setShowAnswer(false)
  }, [correctAnswer])

  const onPress = (choice) => {
    setShowAnswer(true)

    onSubmit(choice === correctAnswer)
  }

  return (
    <div>
      {choices.map((choice, index) => {
        let color = ''

        if (showAnswer) {
          color = choice === correctAnswer ? 'green' : 'red'
        }

        return (
          <Answer
            key={index}
            text={choice}
            onPress={() => onPress(choice)}
            color={color}
            disabled={showAnswer}
          />
        )
      })}
    </div>
  )
}

export default Answers
