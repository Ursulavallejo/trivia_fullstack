function Answer({ text, onPress, color, disabled }) {
  return (
    <button onClick={onPress} style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  )
}

export default Answer
