"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";

const ADMIN_EMAIL = "antonia@braditsch.at";

export function useAdmin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsAdmin(user?.email === ADMIN_EMAIL);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(session?.user?.email === ADMIN_EMAIL);
    });
    return () => subscription.unsubscribe();
  }, []);

  return { isAdmin, loading };
}
