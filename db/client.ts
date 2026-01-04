import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as SQLite from 'expo-sqlite';

export const sqliteDb = SQLite.openDatabaseSync('db.db');
export const db = drizzle(sqliteDb);
