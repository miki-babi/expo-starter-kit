import { listAllTables } from "@/lib/db/dbhelper";
import Storage from "@/lib/storage";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  console.log("hello");



  useEffect(() => {
    (async () => {
      try {

const test= process.env.EXPO_PUBLIC_API_URL;

console.log(test);
 
        // await runMigrations();    comment this out to run migrations
      
        const tables = await listAllTables(); //lists all the tables in db 
        console.log(tables);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>

    </View>
  );
}
