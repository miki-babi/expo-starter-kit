import { count, InferInsertModel, sql, SQL, Table } from "drizzle-orm";
import { db } from "../../db/client";
import migrationFiles from "../../drizzle/migrations";



import { migrate } from 'drizzle-orm/expo-sqlite/migrator';


/**
 * Run all pending Drizzle migrations on the database.
 */
export async function runMigrations() {
    try {
        await migrate(db, migrationFiles);
        console.log('✅ Migrations applied successfully');
    } catch (err) {
        console.error('❌ Migration failed:', err);
    }
}


export async function getAll<T extends Table>(table: T) {
    return db.select().from(table);
}


export async function addToTable<T extends Table>(
    table: T,
    values: InferInsertModel<T>
) {
    return db.insert(table).values(values);
}


export async function updateTable<T extends Table>(
    table: T,
    values: Partial<InferInsertModel<T>>,
    where: SQL
) {
    return db.update(table).set(values).where(where);
}

export async function deleteFromTable<T extends Table>(
    table: T,
    where: SQL
) {
    return db.delete(table).where(where);
}

export async function getById<T extends Table>(
    table: T,
    where: SQL
) {
    const result = await db.select().from(table).where(where);
    return result[0] ?? null; // return null if not found
}

export async function getFiltered<T extends Table>(
    table: T,
    where?: SQL,
    orderBy?: SQL | SQL[]
) {
    let query = db.select().from(table);
    if (where) {
        query = query.where(where) as any;
    }
    if (orderBy) {
        query = query.orderBy(...(Array.isArray(orderBy) ? orderBy : [orderBy])) as any;
    }
    return query;
}

/**
 * DEBUG HELPERS
 */

export async function getRowCount<T extends Table>(table: T) {
    const result = await db.select({ count: count() }).from(table);
    return result[0].count;
}

export async function clearTable<T extends Table>(table: T) {

    return db.delete(table);
}

export async function listAllTables() {
    return db.all(sql`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name NOT LIKE '__drizzle_migrations'`);
}

export async function describeTable(tableName: string) {
    return db.all(sql.raw(`PRAGMA table_info(${tableName})`));
}

export async function execRaw(sqlString: string) {
    return db.run(sql.raw(sqlString));
}

