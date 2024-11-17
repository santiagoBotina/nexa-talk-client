import {defineConfig} from "drizzle-kit";

export default defineConfig({
    schema: './src/core/adapters/out/postgres/schema.ts',
    out: './src/core/adapters/out/postgres/drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        host: process.env.DB_HOST || 'localhost',
        port: 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres',
        database: process.env.DB_NAME || 'postgres',
        ssl: false
    },
    migrations: {
        table: 'schema_migrations',
        schema: 'public',
    },
    strict: true,
    verbose: true,
})
