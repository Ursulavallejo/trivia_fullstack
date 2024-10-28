function Answer({ text, onPress, color, disabled }) {
  return (
    <button
      onClick={onPress}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Answer
