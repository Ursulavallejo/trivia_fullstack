function Reset(props) {
  return (
    <div>
      <h1>
        You Scored:{' '}
        {Math.round((props.correctQuestions / props.totalQuestions) * 100)}%
      </h1>
      <button onClick={props.onPress}>Press to try again!!</button>
    </div>
  )
}

export default Reset
