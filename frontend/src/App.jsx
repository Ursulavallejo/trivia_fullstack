import { useEffect } from 'react'

// import styles from './App.module.scss'

// import './App.css'

function App() {
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        alert(`Hello ${result.hello}!`)
      })
  }, [])

  return (
    <>
      <div></div>
    </>
  )
}

export default App
