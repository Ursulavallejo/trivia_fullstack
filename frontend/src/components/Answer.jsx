import PropTypes from 'prop-types'

function Answer({ text, onPress, color, disabled }) {
  return (
    <button onClick={onPress} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  )
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Answer
