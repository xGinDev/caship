import Constants from "expo-constants";

export const useEnv = () => {
  const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl;
  const supabaseAnonKey = Constants.expoConfig?.extra?.supabaseAnonKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase configuration in environment variables");
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
  };
};
