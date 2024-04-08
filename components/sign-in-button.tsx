"use client";

import { createClient } from "@/lib/supabase/client";

export default function SignInButton() {
    const handleSignInWithOAuth = async () => {
        const provider = "google";
        const supabase = createClient();

        await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: "https://track75.com/auth/callback",
            }
        });
    }

	return (
	  	<button 
            className="group relative grid overflow-hidden rounded-full px-6 py-2.5 shadow-lg shadow-emerald-500/50 focus:ring-2 focus:outline-none focus:ring-emerald-300 transition-colors duration-200"
            onClick={handleSignInWithOAuth}
        >
			<span>
		  		<span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
			</span>
			<span className="backdrop absolute inset-[1px] rounded-full bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-500 group-hover:bg-gradient-to-br transition-colors duration-200" />
			<span className="text z-10 text-black text-lg font-extrabold flex items-center">
				<svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
					<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
				</svg>
				Sign in with Google
			</span>
	  	</button>
	);
};