import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Inspiration from "@/components/inspiration";
import KPICards from "@/components/kpi-cards";
import Heatmap from "@/components/heatmap";
import SubmitButton from "@/components/submit-button";

export default async function Dashboard() {
    const supabase = createClient();

    const user = await supabase.auth.getUser();
    const userId = user.data.user?.id;
    if (!userId) {
        redirect("/");
    }

    const { data, error } = await supabase
        .from("soft")
        .select()
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) {
        return null;
    }

    const progress = data.map(entry => {
        const date = new Date(entry.created_at);
        return {
            date: new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 10).replaceAll("-", "/"),
            count: [entry.diet, entry.train, entry.water, entry.read].filter(item => item).length
        }
    });

    return (
        <MaxWidthWrapper className="flex flex-col h-[calc(100dvh)]">
            <Navbar />
            <Inspiration />
            <KPICards progress={progress} />
            <Heatmap progress={progress} />
            <SubmitButton progress={progress} />
        </MaxWidthWrapper>
    );
}