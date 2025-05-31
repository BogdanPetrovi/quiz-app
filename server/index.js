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
  origin:'http://localhost:5173',
}))
const port = process.env.PORT



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