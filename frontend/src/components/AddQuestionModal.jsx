import { useState } from 'react'
import PropTypes from 'prop-types'

function AddQuestionModal({ onClose, onAdd }) {
  const [question, setQuestion] = useState('')
  const [correctAnswer, setCorrectAnswer] = useState('')
  const [incorrectAnswers, setIncorrectAnswers] = useState(['', '', ''])

  const handleAddQuestion = async () => {
    const newQuestion = {
      question,
      correctAnswer,
      incorrectAnswers,
    }

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      })

      if (response.ok) {
        onAdd()
        onClose()
      } else {
        console.error('Error adding question:', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="modal">
      <h2>Add New Question</h2>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </label>
      <label>
        Correct Answer:
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        />
      </label>
      <h3>Incorrect Answers:</h3>
      {incorrectAnswers.map((ans, index) => (
        <label key={index}>
          Answer {index + 1}:
          <input
            type="text"
            value={ans}
            onChange={(e) => {
              const newAnswers = [...incorrectAnswers]
              newAnswers[index] = e.target.value
              setIncorrectAnswers(newAnswers)
            }}
          />
        </label>
      ))}
      <button onClick={handleAddQuestion}>Add Question</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}

AddQuestionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default AddQuestionModal
