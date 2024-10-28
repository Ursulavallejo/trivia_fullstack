import { useState } from 'react'
import Answer from './Answer'

function Answers({ choices, onSubmit }) {
  const [showAnswer, setShowAnswer] = useState(false)

  const onPress = (index) => {
    setShowAnswer(true)
    // onSubmit(correctAnswerIndex === index)
  }

  return (
    <div>
      {choices.map((choice, index) => {
        let color = ''

        if (showAnswer && correctAnswerIndex === index) color = 'green'
        else if (showAnswer) color = 'red'

        return (
          <Answer
            key={index}
            text={choice}
            onPress={() => onPress(index)}
            color={color}
            disabled={showAnswer}
          />
        )
      })}
    </div>
  )
}

export default Answers
