import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

const client = postgres({
  host: process.env.DB_HOST || "localhost",
  port: 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  db: process.env.DB_NAME || "postgres",
  ssl: false,
});

export const db: PostgresJsDatabase<typeof schema> = drizzle(client, {
  schema,
});
