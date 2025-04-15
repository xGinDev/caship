import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("session.db");

export const initDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session TEXT
    );
  `);
};

export const saveSession = async (session: string) => {
  try {
    db.runSync("INSERT INTO sessions (session) VALUES (?)", [session]);
    console.log("Sesión guardada en SQLite");
  } catch (error) {
    console.error("Error al guardar sesión:", error);
    throw error;
  }
};

export const getSession = async (): Promise<string | null> => {
  try {
    const result = db.getAllSync<{ session: string }>(
      "SELECT session FROM sessions ORDER BY id DESC LIMIT 1"
    );
    return result[0]?.session || null;
  } catch (error) {
    console.error("Error al obtener sesión:", error);
    return null;
  }
};

export const deleteSession = async () => {
  try {
    db.runSync("DELETE FROM sessions");
  } catch (error) {
    console.error("Error al eliminar sesión:", error);
    throw error;
  }
};
