import { Pool } from 'pg'

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  ssl: {
        rejectUnauthorized: true,
        ca: process.env.PGCA,
    },
})

export default {
  query: (text, params) => pool.query(text, params)
}