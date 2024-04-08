"use client";

import * as React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Menu, XIcon } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const navigation = [
    { 
        name: "Hard", 
        href: "/hard" 
    },
    { 
        name: "Soft", 
        href: "/soft" 
    },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const router = useRouter();

    const handleSignOut = async () => {
        const supabase = createClient();
        await supabase.auth.signOut();
        router.push("/");
    }

    return (
        <>
            <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full backdrop-blur-lg transition-all">
                <MaxWidthWrapper>
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/dashboard" className="flex z-40 text-2xl text-white space-x-3">
                            <svg className="pt-1" width="25px" height="25px" fill="#34d399" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g><g><polygon points="127.998,44.522 77.495,77.459 127.994,110.396 178.5,77.457"/></g></g>
                                <g><g><polygon points="383.996,44.522 333.492,77.46 383.997,110.397 434.502,77.459"/></g></g>
                                <g><g><polygon points="383.997,150.261 255.992,66.783 127.994,150.261 0,66.783 33.391,367.304 478.609,367.304 512,66.783"/></g></g>
                                <g><g><rect x="33.391" y="400.696" width="445.217" height="66.783"/></g></g>
                            </svg>
                            <h1>Track 75</h1>
                        </Link>
                        <div className="items-center space-x-4 flex">
                            <div className="flex">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                    onClick={() => setMobileMenuOpen(true)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <Menu className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </nav>

            <Dialog
                as="div"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 mx-auto w-full overflow-y-auto bg-gradient-to-b from-[rgb(12,19,34)] to-black max-w-7xl px-6 md:px-20">
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/dashboard" className="flex text-2xl text-white space-x-3 -ml-3">
                            <span className="sr-only">Track 75</span>
                            <svg className="pt-1" width="25px" height="25px" fill="#34d399" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g><g><polygon points="127.998,44.522 77.495,77.459 127.994,110.396 178.5,77.457"/></g></g>
                                <g><g><polygon points="383.996,44.522 333.492,77.46 383.997,110.397 434.502,77.459"/></g></g>
                                <g><g><polygon points="383.997,150.261 255.992,66.783 127.994,150.261 0,66.783 33.391,367.304 478.609,367.304 512,66.783"/></g></g>
                                <g><g><rect x="33.391" y="400.696" width="445.217" height="66.783"/></g></g>
                            </svg>
                            <h1>Track 75</h1>
                        </Link>
                        <button
                            type="button"
                            className="rounded-md text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/80 hover:text-black"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <button
                                    className="w-full text-left -mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white/80 hover:text-black"
                                    onClick={handleSignOut}
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}