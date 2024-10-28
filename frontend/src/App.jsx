import { useEffect, useState } from 'react'

// import styles from './App.module.scss'

// import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <div>
        <h1>Trivia</h1>
        {data.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            <h2>{item.question}</h2>
            <ul>
              <li>Correct Answer: {item.correctanswer}</li>
              <li>Incorrect Answer 1: {item.incorrectanswer1}</li>
              <li>Incorrect Answer 2: {item.incorrectanswer2}</li>
              <li>Incorrect Answer 3: {item.incorrectanswer3}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
