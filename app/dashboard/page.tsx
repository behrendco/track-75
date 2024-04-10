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

    return (
        <MaxWidthWrapper className="flex flex-col h-[calc(100dvh)]">
            <Navbar />
            <Inspiration />
            <KPICards data={data} />
            <Heatmap data={data} />
            <SubmitButton data={data} />
        </MaxWidthWrapper>
    );
}