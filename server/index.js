import express from 'express'
import 'dotenv/config'
import db from './database/db.js'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

const app = express()
app.use(helmet())
app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  origin: process.env.ORIGIN,
}))
const port = process.env.PORT

app.get('/question/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM questions JOIN options ON options.id = questions.id JOIN answers ON answers.id = questions.id WHERE questions.id = $1;', 
    [id])
    res.status(200).json(result.rows)
  } catch (err) {
    console.log(err)
    res.status(500);
  }
})

app.get('/picture/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM pictures WHERE id = $1;', [id])
    res.status(200).json(result.rows)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
})

app.get('/simulation', async (req, res) => {
  try {
    const result = await db.query(`
      ( SELECT id FROM questions WHERE points IN (1, 1.5) ORDER BY RANDOM() LIMIT 15 )
      UNION ALL
      ( SELECT id FROM questions WHERE points IN (2, 2.5) ORDER BY RANDOM() LIMIT 8 )
      UNION ALL
      ( SELECT id FROM questions WHERE points IN (3, 3.5, 4) ORDER BY RANDOM() LIMIT 7 )
    `);
    const allQuestions = result.rows.map(item => item.id);
    res.status(200).json(allQuestions)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
})

// Route for database import
// app.post('/add', async (req, res) => {
//   const { question, id, answer, options } = req.body
//   try {
//     await db.query('INSERT INTO questions(id, text) VALUES ($1, $2);', [id, question])
//     await db.query('INSERT INTO options (id, options) VALUES ($1, $2)', [id, options])
//     await db.query('INSERT INTO answers (id, answer) VALUES ($1, $2)', [id, answer])
//     res.status(200).json({
//       status: "Success"
//     })
//   } catch (err) {
//     console.log(err)
//     res.status(500).send("Error on server")
//   }
// })

app.listen(port, () => {
  console.log(`App is live and running at port ${port}!`)
})