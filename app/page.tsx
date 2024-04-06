export default function Home() {
  	return (
    	<main className="flex flex-col h-screen items-center justify-center">
			<svg width="50px" height="50px" fill="#34d399" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<g><g><polygon points="127.998,44.522 77.495,77.459 127.994,110.396 178.5,77.457"/></g></g>
				<g><g><polygon points="383.996,44.522 333.492,77.46 383.997,110.397 434.502,77.459"/></g></g>
				<g><g><polygon points="383.997,150.261 255.992,66.783 127.994,150.261 0,66.783 33.391,367.304 478.609,367.304 512,66.783"/></g></g>
				<g><g><rect x="33.391" y="400.696" width="445.217" height="66.783"/></g></g>
			</svg>
			<h1 className="text-5xl text-white mt-2.5">Track 75</h1>
			<button type="button" className="text-black bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-300 shadow-lg shadow-emerald-500/50 font-black rounded-full text-lg px-12 py-3 text-center mt-6">
				Get Started
			</button>
			<div className="fixed bottom-4 text-xs text-gray-500">
				© 2024 Jack Behrend. All rights reserved.
			</div>
    	</main>
  	);
}
