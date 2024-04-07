import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
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
