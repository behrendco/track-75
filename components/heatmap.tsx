"use client";

import { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import HeatMap from "@uiw/react-heat-map";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { localTimeProgress } from "@/lib/utils";

export default function Heatmap({
    data
}: {
    data: any[]
}) {
    const [selected, setSelected] = useState<{ date: string; count: number; }>({ date: "", count: 0 });
    const [sheetOpen, setSheetOpen] = useState<boolean>(false);

    const progress = localTimeProgress(data);

    let startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 11);

    useEffect(() => {
        if (selected.date.length) {
            setSheetOpen(true);
        }
    }, [selected]);

    useEffect(() => {
        if (!sheetOpen) {
            setSelected({ date: "", count: 0 });
        }
    }, [sheetOpen]);

    return (
        <>
            <MaxWidthWrapper className="mt-2 sm:mt-4">
                <div className="rounded-xl bg-gray-900/80 border border-white/25 w-full p-4 overflow-x-auto hidden md:block">
                    <div className="h-52 overflow-auto flex flex-col items-center justify-center">
                        <HeatMap
                            value={progress}
                            width={925}
                            rectSize={11}
                            space={6}
                            style={{ color: "#6b7280" }}
                            startDate={startDate}
                            legendCellSize={0}
                            rectProps={{ rx: 5 }}
                            rectRender={(props, data) => {
                                if (selected.date !== "") {
                                    props.opacity = data.date === selected.date ? 1 : 0.45
                                }
                                return (
                                    <rect {...props} onClick={() => {
                                        setSelected(data.date === selected.date ? { date: "", count: 0 } : { date: data.date, count: data.count });
                                    }} />
                                );
                            }}
                            panelColors={{
                                0: '#1f2937',
                                1: '#a7f3d0',
                                2: '#6ee7b7',
                                3: '#34d399',
                                4: '#10b981',
                                5: '#059669',
                            }}
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <div className="fixed inset-x-0 mx-auto bottom-8 flex items-center justify-center max-w-7xl px-6 md:px-20">
                        <button 
                            className="group relative grid overflow-hidden rounded-full px-12 py-2.5 w-full md:w-1/2 shadow-lg shadow-emerald-500/50 focus:ring-2 focus:outline-none focus:ring-emerald-300 transition-colors duration-200"
                        >
                            <span>
                                <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-500 group-hover:bg-gradient-to-br transition-colors duration-200" />
                            <span className="text z-10 text-black text-lg font-extrabold flex mx-auto">
                                Submit Progress
                            </span>
                        </button>
                    </div>
                </SheetTrigger>
                <SheetContent 
                    side={"bottom"}
                    className="bg-gradient-to-b from-[rgb(12,19,34)] to-black text-white h-1/4"
                >
                    <SheetHeader className="flex items-center justify-center">
                        <SheetTitle asChild>
                            <h1 className="font-bold text-xl">
                                {selected.date.length ? new Date(selected.date).toDateString() : ""}
                            </h1>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex items-center justify-center w-full">
                        <div className="my-4 flex flex-col text-center space-y-2 w-full sm:w-3/4">
                            You completed {selected.count || 0} of 4 tasks on {selected.date}.
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose
                            asChild
                            className="flex mx-auto w-full sm:w-1/4"
                        >
                            <button 
                                className="group relative grid overflow-hidden rounded-full px-6 py-2.5 shadow-lg shadow-emerald-500/50 focus:ring-0 focus:outline-none focus:ring-emerald-300 transition-colors duration-200"
                            >
                                <span className="backdrop absolute inset-[1px] rounded-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-500 group-hover:bg-gradient-to-br transition-colors duration-200" />
                                <span className="text z-10 text-black text-lg font-extrabold flex flex-col items-center">
                                    Back
                                </span>
                            </button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
}