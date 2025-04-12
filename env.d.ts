declare module 'react-native-config' {
  export const SUPABASE_URL: string;
  export const SUPABASE_ANON_KEY: string;
}

interface ExtendedExpoConfig extends ExpoConfig {
  extra?: {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
  };
}