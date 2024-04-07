"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import CalendarHeatmap from "react-calendar-heatmap";

export default function Heatmap() {
    return (
        <MaxWidthWrapper className="mt-16">
            <CalendarHeatmap
                startDate={new Date('2016-01-01')}
                endDate={new Date('2016-04-01')}
                showMonthLabels={false}
                showWeekdayLabels={false}
                classForValue={value => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`;
                }}
                onClick={value => alert(`Clicked on value with count: ${value?.count || 0}`)}
                values={[
                    // { date: new Date(Date.parse('2016/01/01')), count: 2 },
                    { date: '2016-01-02', count: 3 },
                    { date: '2016-01-22', count: 1 },
                    { date: '2016-01-30', count: 4 },
                    // ...and so on
                ]}
            />
        </MaxWidthWrapper>
    );
}