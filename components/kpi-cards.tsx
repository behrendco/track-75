import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function KPICards() {
    return (
        <MaxWidthWrapper className="mt-2 sm:mt-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-gray-900/80 border border-white/25 w-full p-5">
                    <p className="text-md text-white">&#128170; Challenge</p>
                    <h1 className="text-3xl text-white mt-0.5">Soft</h1>
                </div>
                <div className="rounded-xl bg-gray-900/80 border border-white/25 w-full p-5">
                    <p className="text-md text-white">&#128293; Streak</p>
                    <h1 className="text-3xl text-white mt-0.5">12</h1>
                </div>
                <div className="rounded-xl bg-gray-900/80 border border-white/25 w-full p-5">
                    <p className="text-md text-white">&#129351; Position</p>
                    <h1 className="text-3xl text-white mt-0.5">
                        3
                        <span className="text-xl ml-1">
                            /15
                        </span>
                    </h1>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}