import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text(),
    age: int(),
    sex: text(),
    guest_id: text().unique(),
    server_id: text(),
    phone: text(),
    email: text().unique(),
    password: text(),
    is_guest: int({ mode: "boolean" }).default(true),
    uuid: text().unique(),
    avatar: text(),
    created_at: text(),
    updated_at: text(),
});


// export const testTable = sqliteTable("test_table", {
//     id: int().primaryKey({ autoIncrement: true }),
//     name: text(),
//     age: int(),
//     sex: text(),
//     guest_id: text().unique(),

// });