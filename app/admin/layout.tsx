import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import AdminShell from "./AdminShell";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/anmelden?redirect=/admin");

  const adminEmail = process.env.ADMIN_EMAIL || "antonia@braditsch.at";
  if (user.email !== adminEmail) redirect("/");

  return <AdminShell>{children}</AdminShell>;
}
