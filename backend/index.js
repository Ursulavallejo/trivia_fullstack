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

// app.get('/api', (_request, response) => {
//   response.send({ hello: 'World' })
// })

// app.get('/api', async (_request, response) => {
//   const { rows } = await client.query('SELECT * FROM questions')

//   response.send(rows)
// })

// app.get('/name', (_request, response) => {
//   response.send({ hello: 'Jon!!' })
// })

app.get('/api', async (request, response) => {
  const { rows } = await client.query('SELECT * FROM questions')

  response.send(rows)
})

const port = process.env.PORT || 3000

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}`)
})
