import PropTypes from 'prop-types'
import StatBar_style from './StatBar.module.scss'

function StatBar(props) {
  return (
    <div className={StatBar_style['stat-container']}>
      <p>
        Question: {props.currentQuestion}/ {props.totalQuestions}
      </p>
      <p>Correct: {props.correct}</p>
      <p>Incorrect: {props.incorrect}</p>
    </div>
  )
}

StatBar.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  incorrect: PropTypes.number.isRequired,
}

export default StatBar
