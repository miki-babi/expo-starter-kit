// lib/storage.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

const Storage = {
  // Save a value (string or object)
  set: async (key: string, value: any) => {
    try {
      const data = typeof value === "string" ? value : JSON.stringify(value);
      await AsyncStorage.setItem(key, data);
    } catch (err) {
      console.error(`Error setting storage key "${key}":`, err);
    }
  },

  // Get a value (parses JSON automatically)
  get: async <T = any>(key: string): Promise<T | null> => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (!data) return null;
      try {
        return JSON.parse(data) as T;
      } catch {
        return data as unknown as T; // return string if not JSON
      }
    } catch (err) {
      console.error(`Error getting storage key "${key}":`, err);
      return null;
    }
  },

  // Remove a key
  remove: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(`Error removing storage key "${key}":`, err);
    }
  },

  // Clear all storage (use carefully!)
  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.error("Error clearing storage:", err);
    }
  },
};

export default Storage;




// // Save token
// await Storage.set("token", "my_secret_token");

// // Get token
// const token = await Storage.get<string>("token");
// console.log(token); // "my_secret_token"

// // Remove token
// await Storage.remove("token");