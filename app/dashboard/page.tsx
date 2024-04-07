import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Inspiration from "@/components/inspiration";
import KPICards from "@/components/kpi-cards";
import Heatmap from "@/components/heatmap";

export default async function Dashboard() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
        redirect("/");
    }

    return (
        <MaxWidthWrapper className="flex flex-col h-screen">
            <Navbar />
            <Inspiration />
            <KPICards />
            <Heatmap />
            {/* <MaxWidthWrapper>
                <p className="mt-3 text-white">Hello, {data.user.email}</p>
            </MaxWidthWrapper> */}
        </MaxWidthWrapper>
    );
}