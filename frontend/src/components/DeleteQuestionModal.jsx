import { useState } from 'react'
import PropTypes from 'prop-types'

function DeleteQuestionModal({ questions, onClose, onDelete }) {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null)

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/questions/${selectedQuestionId}`,
        {
          method: 'DELETE',
        }
      )
      if (response.ok) {
        onDelete()
        onClose()
      } else {
        console.error('Error deleting question:', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="modal">
      <h2>Delete Question</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question}
            <button onClick={() => setSelectedQuestionId(question.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {selectedQuestionId && (
        <div>
          <p>Are you sure you want to delete this question?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setSelectedQuestionId(null)}>No</button>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

DeleteQuestionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteQuestionModal
