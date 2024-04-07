import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function KPICards() {
    return (
        <MaxWidthWrapper className="mt-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-lg bg-gradient-to-br from-emerald-600 via-emerald-800 to-emerald-900 border border-white/60 w-full px-4 pt-4 pb-5">
                    <p className="font-medium text-lg text-white">&#128548; Challenge</p>
                    <h1 className="text-3xl text-white mt-1">Soft</h1>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-emerald-600 via-emerald-800 to-emerald-900 border border-white/60 w-full px-4 pt-4 pb-5">
                    <p className="font-medium text-lg text-white">&#128293; Streak</p>
                    <h1 className="text-3xl text-white mt-1">12</h1>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-emerald-600 via-emerald-800 to-emerald-900 border border-white/60 w-full px-4 pt-4 pb-5">
                    <p className="font-medium text-lg text-white">&#129351; Position</p>
                    <h1 className="text-3xl text-white mt-1">3/15</h1>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}