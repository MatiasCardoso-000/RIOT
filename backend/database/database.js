import {Pool} from 'pg'

const connectionString = process.env.URI

export const db = new Pool({
allowExitOnIdle,
connectionString
})

const client = await db.connect()
await client.query('SELECT NOW()')
console.log('database connected ✔✔✔');

