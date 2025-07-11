import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import path from 'node:path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as schema from '@/models/Schema';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const globalForDb = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
};

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate
const createDbConnection = () => {
  return drizzle({
    connection: {
      connectionString: Env.DATABASE_URL,
      ssl:
        !Env.DATABASE_URL.includes('localhost')
        && !Env.DATABASE_URL.includes('127.0.0.1'),
    },
    schema,
  });
};

const db = globalForDb.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalForDb.drizzle = db;
}

// Only run migrations at runtime, not during build time
if (typeof window === 'undefined' && process.env.NODE_ENV !== 'test') {
  // Run migrations asynchronously to avoid blocking the build
  migrate(db, {
    migrationsFolder: path.join(process.cwd(), 'migrations'),
  }).catch((error) => {
    console.warn('Database migration failed:', error);
  });
}

export { db };
