const dotenv = require('dotenv'),
  express = require('express'),
  { Client } = require('pg')

const app = express()

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI,
})

client.connect()

// app.get('/api', (_request, response) => {
//   response.send({ hello: 'World' })
// })

// app.get('/api', async (_request, response) => {
//   const { rows } = await client.query('SELECT * FROM questions')

//   response.send(rows)
// })

app.get('', async (request, response) => {
  const { rows } = await client.query('SELECT * FROM questions')

  response.send(rows)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
