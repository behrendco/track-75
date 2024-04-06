import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Dashboard() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }

    return (
        <div className="flex flex-col h-screen items-center justify-center">
            <p className="text-white">Hello {data.user.email}</p>
        </div>
    );
}