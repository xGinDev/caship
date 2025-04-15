import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import { Session } from "@supabase/supabase-js";
import {
  getSession,
  saveSession,
  deleteSession,
  initDatabase,
} from "@/utils/database";

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initDatabase();

    const loadSession = async () => {
      const storedSession = await getSession();
      if (storedSession) {
        setSession(JSON.parse(storedSession));
      }

      const {
        data: { session: currentSession },
      } = await supabase.auth.getSession();
      setSession(currentSession);
      setLoading(false);
    };

    loadSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        await saveSession(JSON.stringify(session));
      } else {
        await deleteSession();
      }
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, loading };
};
