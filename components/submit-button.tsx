import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function SubmitButton() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="fixed inset-x-0 mx-auto bottom-8 flex items-center justify-center">
                    <button 
                        className="group relative grid overflow-hidden rounded-full px-12 py-2.5 shadow-lg shadow-emerald-500/50 focus:ring-2 focus:outline-none focus:ring-emerald-300 transition-colors duration-200"
                        // onClick={}
                    >
                        <span>
                            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                        </span>
                        <span className="backdrop absolute inset-[1px] rounded-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-500 group-hover:bg-gradient-to-br transition-colors duration-200" />
                        <span className="text z-10 text-black text-lg font-extrabold flex items-center">
                            Submit Progress
                        </span>
                    </button>
                </div>
            </SheetTrigger>
            <SheetContent 
                side={"bottom"}
                className="bg-gradient-to-b from-[rgb(12,19,34)] to-black text-white"
            >
                <SheetHeader className="flex items-center justify-center">
                    <SheetTitle asChild>
                        <h1 className="font-bold text-xl">
                            What did you get done today?
                        </h1>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex items-center justify-center w-full">
                    <div className="my-6 sm:my-8 flex flex-col space-y-2 w-full sm:w-3/4">
                        <div className="px-6 py-2.5 w-full flex items-center justify-center rounded-full border border-white/40 hover:bg-white/5">
                            <h1>Diet</h1>
                        </div>
                        <div className="px-6 py-2.5 w-full flex items-center justify-center rounded-full border border-white/40 hover:bg-white/5">
                            <h1>Train 45 Minutes</h1>
                        </div>
                        <div className="px-6 py-2.5 w-full flex items-center justify-center rounded-full border border-white/40 hover:bg-white/5">
                            <h1>Drink 3 Liters Water</h1>
                        </div>
                        <div className="px-6 py-2.5 w-full flex items-center justify-center rounded-full border border-white/40 hover:bg-white/5">
                            <h1>Read 10 Pages</h1>
                        </div>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose
                        asChild
                        className="flex mx-auto w-full sm:w-3/4"
                    >
                        <button 
                            className="group relative grid overflow-hidden rounded-full px-6 py-2.5 shadow-lg shadow-emerald-500/50 focus:ring-0 focus:outline-none focus:ring-emerald-300 transition-colors duration-200"
                            // type="submit"
                            // onClick={handleSignInWithOAuth}
                        >
                            <span className="backdrop absolute inset-[1px] rounded-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-500 group-hover:bg-gradient-to-br transition-colors duration-200" />
                            <span className="text z-10 text-black text-lg font-extrabold flex flex-col items-center">
                                Submit
                            </span>
                        </button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}