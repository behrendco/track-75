import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export default function ToggleButton({
    text,
    checked,
    setChecked
}: {
    text: string,
    checked: boolean,
    setChecked: Dispatch<SetStateAction<boolean>>
}) {
    return (
        <button 
            className={cn(
                "px-6 py-2.5 w-full flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10",
                checked ? "bg-white/10" : null
            )}
            onClick={() => setChecked(!checked)}
        >
            <h1>{text}</h1>
        </button>
    );
}