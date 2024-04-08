"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import HeatMap from "@uiw/react-heat-map";

const values = [
    { date: '2016/01/11', count:2 },
    { date: '2016/04/12', count:2 },
    { date: '2016/05/01', count:5 },
    { date: '2016/05/02', count:5 },
    { date: '2016/05/03', count:1 },
    { date: '2016/05/04', count:11 },
    { date: '2016/05/08', count:32 },
];

export default function Heatmap() {
    return (
        <MaxWidthWrapper className="mt-2 sm:mt-4">
            <div className="rounded-xl bg-gray-900/80 border border-white/25 w-full p-4 hidden md:block">
                <div className="h-52 flex items-center justify-center">
                    {/* {show ? (
                        <HeatMap
                            value={values}
                            width={width ? width : 2000}
                            space={6}
                            style={{ color: "#6b7280" }}
                            startDate={new Date('2016/01/01')}
                            rectProps={{ rx: 5 }}
                            legendCellSize={0}
                            panelColors={{
                                0: '#1f2937',
                                2: '#a7f3d0',
                                4: '#6ee7b7',
                                10: '#34d399',
                                20: '#10b981',
                                30: '#059669',
                            }}
                        />
                    ) : (
                        <Loader2 className="w-12 h-12 animate-spin text-emerald-500" />
                    )} */}
                    <HeatMap
                        value={values}
                        width={925}
                        rectSize={11}
                        space={6}
                        style={{ color: "#6b7280" }}
                        startDate={new Date('2016/01/01')}
                        rectProps={{ rx: 5 }}
                        legendCellSize={0}
                        panelColors={{
                            0: '#1f2937',
                            2: '#a7f3d0',
                            4: '#6ee7b7',
                            10: '#34d399',
                            20: '#10b981',
                            30: '#059669',
                        }}
                    />
                </div>
            </div>
        </MaxWidthWrapper>
    );
}