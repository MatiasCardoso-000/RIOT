import { Pool } from "pg";

const connectionString = process.env.URI;

export const db = new Pool({
  allowExitOnIdle: true,
  connectionString,
});

const client = await db.connect();
try {
  await client.query("SELECT NOW()");
  console.log("database connected ✔✔✔");
} catch (error) {
  console.error("database connection error ❌❌❌", error);
} finally {
  client.release();
}
