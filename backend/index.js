const dotenv = require('dotenv'),
  express = require('express'),
  { Client } = require('pg'),
  path = require('path')

const app = express()

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

app.use(express.json())

app.get('/api', async (request, response) => {
  const { rows } = await client.query('SELECT * FROM questions')

  response.send(rows)
})

app.post('/api/questions', async (request, response) => {
  const { question, correctAnswer, incorrectAnswers } = request.body

  try {
    const query = `
      INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
      VALUES ($1, $2, $3, $4, $5) RETURNING *
    `
    const values = [question, correctAnswer, ...incorrectAnswers]

    const { rows } = await client.query(query, values)
    response.status(201).send(rows[0])
  } catch (error) {
    console.error('Error inserting question:', error)
    response.status(500).send('Internal Server Error')
  }
})

const port = process.env.PORT || 3000

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
