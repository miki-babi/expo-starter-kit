````md
# 📦Helpers Usage Guide  
(Axios · Storage · DB)

Simple, Laravel-like helpers for your app.

---

## 🌐 AXIOS HELPER

### Without token
```ts
import { api } from "@/lib/axios";

const res = await api.get("/users");
const res2 = await api.post("/login", { email, password });
````

### With token

```ts
import { apiWithToken } from "@/lib/http/axios";

const res = await apiWithToken.get("/profile");
```

---

### All HTTP methods

#### GET

```ts
api.get("/posts");
apiWithToken.get("/posts");
```

#### POST

```ts
api.post("/posts", { title: "Hi" });
apiWithToken.post("/posts", { title: "Hi" });
```

#### PUT

```ts
apiWithToken.put("/posts/1", { title: "Updated" });
```

#### PATCH

```ts
apiWithToken.patch("/posts/1", { title: "Small change" });
```

#### DELETE

```ts
apiWithToken.delete("/posts/1");
```

---

## 💾 STORAGE HELPER

### Save data
```ts
import Storage from "@/lib/storage";
```
```ts
await Storage.set("token", "my_secret_token");
```

### Get data

```ts
const token = await Storage.get<string>("token");
```

### Update data

```ts
await Storage.set("token", "new_token");
```

### Remove data

```ts
await Storage.remove("token");
```

### Example flow

```ts
await Storage.set("token", "abc");
const token = await Storage.get("token"); // "abc"
await Storage.remove("token");
```

---

## 🗄️ DB HELPER (Drizzle)

```ts
import { * } from "@/lib/db/dbhelper";
```
### Run migrations

```ts
await runMigrations();
```

---

### Get all rows

```ts
const users = await getAll(usersTable);
```

### Get one row

```ts
const user = await getById(usersTable, eq(usersTable.id, 1));
```

### Insert

```ts
await addToTable(usersTable, {
  name: "John",
  email: "john@mail.com",
});
```

### Update

```ts
await updateTable(
  usersTable,
  { name: "New Name" },
  eq(usersTable.id, 1)
);
```

### Delete

```ts
await deleteFromTable(
  usersTable,
  eq(usersTable.id, 1)
);
```

### Filter & order

```ts
const users = await getFiltered(
  usersTable,
  eq(usersTable.role, "student"),
  desc(usersTable.createdAt)
);
```

---

## 🧪 DB DEBUG

### Count rows

```ts
const count = await getRowCount(usersTable);
```

### Clear table

```ts
await clearTable(usersTable);
```

### List tables

```ts
const tables = await listAllTables();
```

### Raw SQL

```ts
await execRaw("DELETE FROM users");
```

---

## 🧠 Simple mental model

* **Axios** → talk to server
* **Storage** → save small data (token, settings)
* **DB** → local app data


```
```
