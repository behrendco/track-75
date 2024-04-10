import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
    title = "Track 75",
    description = "Track Your 75 Hard/Soft Challenge Progress",
    image = "/images/opengraph-image.png",
    icons = "/icon.ico",
    noIndex = false
}: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
} = {}): Metadata {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@behrend_co"
        },
        icons,
        metadataBase: new URL('https://track75.com'),
        // themeColor: '#ffffff',
        ...(noIndex && {
            robots: {
            index: false,
            follow: false
            }
        })
    }
}

export async function getQuote() {
    const url = "https://zenquotes.io/api/random";
    const response = await fetch(url);
    const data = await response.json();
    return {
        quote: data[0].q,
        author: data[0].a
    };
}

export function localTimeProgress(
    data: any[]
) {
    return data.map(entry => {
        const date = new Date(entry.created_at);
        return {
            date: new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000).toISOString().substring(0, 10).replaceAll("-", "/"),
            count: [entry.diet, entry.train, entry.water, entry.read].filter(item => item).length
        }
    });
}

export function currentStreak(
    progress: {
        date: string;
        count: number;
    }[]
) {
    let count = 0;
    let startDate = new Date(new Date().toLocaleDateString());
    startDate.setDate(startDate.getDate() - 1);

    if (!progress.length) {
        return count;
    }

    if (new Date().toDateString() === new Date(progress[0].date).toDateString()) {
        count++;
        progress.slice(1).forEach((item, i) => {
            if ((startDate.setUTCHours(0,0,0,0) - new Date(item.date).setUTCHours(0,0,0,0)) === i * 86400000) {
                count++;
            }
        });
    } else {
        progress.forEach((item, i) => {
            if ((startDate.setUTCHours(0,0,0,0) - new Date(item.date).setUTCHours(0,0,0,0)) === i * 86400000) {
                count++;
            }
        });
    }
    
    return count;
}

export function bestStreak(
    progress: {
        date: string;
        count: number;
    }[]
) {
    const dates = progress.map(item => new Date(item.date));
    if (!dates.length) {
        return 0;
    }

    let currStreak = 1;
    let maxStreak = 1;

    for (let i = 1; i < dates.length; i++) {
        const date1 = Date.UTC(dates[i - 1].getFullYear(), dates[i - 1].getMonth(), dates[i - 1].getDate());
        const date2 = Date.UTC(dates[i].getFullYear(), dates[i].getMonth(), dates[i].getDate());

        if (Math.abs(date2 - date1) === 86400000) {
            currStreak++;
        } else {
            maxStreak = Math.max(maxStreak, currStreak);
            currStreak = 1;
        }
    }

    maxStreak = Math.max(maxStreak, currStreak);
    return maxStreak;
}