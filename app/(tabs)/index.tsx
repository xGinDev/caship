import { SafeAreaView, Text } from "react-native";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";

export default function HomeScreen() {
  const [session, setSession] = useState<Session | null>(null)
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <SafeAreaView className="bg-primary h-full flex flex-col justify-center items-center">
      {session && session.user && <Text>{session.user.id}</Text>}
    </SafeAreaView>
  );
}