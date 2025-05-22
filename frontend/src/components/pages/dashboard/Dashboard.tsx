import background from "../../../assets/background.png";
import Diary from "./Diary";

export default function Landing() {
	return (
		<div
			style={{ backgroundImage: `url(${background})` }}
			className="bg-cover bg-no-repeat w-full min-h-screen relative"
		>
			{/* Search Bar */}
			<div className="w-full p-3 flex">
				<div className="mt-3 flex w-full gap-2 items-center">
					<input
						type="text"
						placeholder="Search Entries by title or date"
						className="p-2 text-base text-slate-100 w-full outline-none rounded-md focus:ring  bg-[#0b2630] border border-sky-800 focus:ring-sky-600"
					/>
					<div className="text-white">
						<button className="p-1 py-2 text-base border border-[#057ba5] rounded-md w-30 bg-[#002a3a] text-white hover:cursor-pointer">
							Create Entry
						</button>
					</div>
				</div>
			</div>

			{/* Recent Highlights */}
			{/* <div className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-4 flex justify-center">
				<div className="w-full bg-[#122117] border border-amber-500 text-amber-300 rounded-lg p-4 shadow-inner">
					<p className="text-lg font-semibold">Recent Highlights</p>
				</div>
			</div> */}

			{/* All Entries Section */}
			<div className="w-full min-h-screen h-auto p-4 flex justify-center">
				<div className="w-11/12 bg-[#0b1e24] border border-sky-700 text-sky-200 rounded-xl p-6 shadow-lg space-y-4">
					<h2 className="text-2xl font-bold">All Entries</h2>

					{/* Example Entry */}
					<Diary />
					<Diary />
					{/* Empty state message if no entries */}
					{/* <p className="text-slate-400 italic">No entries yet — start journaling!</p> */}
				</div>
			</div>
		</div>
	);
}

// import { useState } from "react";
// import background from "../../assets/background.png";
// // TODO - add a "how are you feeling today?" (mood-wise) section on the sidebar where the user can select an emoji of how they're feeling today
// // TODO - add magnifying glass icon to the search bar
// // TODO - allow users to favorite entries and on the left side add a favorites section
// // TODO - maybe have a number displaying how many entries the user has posted on the nav section too?

// export default function Landing() {
// 	const [show, setShow] = useState(true);

// 	return (
// 		<div
// 			style={{ backgroundImage: `url(${background})` }}
// 			className="bg-cover bg-no-repeat w-full min-h-screen relative"
// 		>
// 			{/* Sidebar */}
// 			<div className="w-1/6 bg-[#0c1b14] p-2 absolute left-0 min-h-screen h-full shadow-md shadow-emerald-900 text-white flex justify-center">
// 				<h1 className="text-3xl">Nest</h1>
// 			</div>
// {/* Search Bar */}
// <div className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-3 flex">
// 	<div className="mt-3 flex w-full gap-2 items-center">
// 		<input
// 			type="text"
// 			placeholder="Search Entries by title or date"
// 			className="p-2 text-base text-slate-100 w-full outline-none rounded-md focus:ring  bg-[#091e13] border border-green-800 focus:ring-green-600"
// 		/>
// 		<div className="text-white">
// 			<button className="p-1 py-2 text-base border border-[#057ba5] rounded-md w-30 bg-[#002a3a] text-white hover:cursor-pointer">
// 				Create Entry
// 			</button>
// 		</div>
// 	</div>
// </div>

// 			{/* Recent Highlights Section */}
// 			{show && (
// 				<div
// 					className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-2 flex justify-center"
// 					onClick={() => setShow(!show)}
// 				>
// 					<div className="w-full bg-[#061b11] text-green-500 border border-green-700 rounded-lg p-4 mx-10 mt-5 shadow-inner shadow-[#0c1b14] h-40">
// 						<p className="text-lg font-semibold">Recent Highlights</p>
// 					</div>
// 				</div>
// 			)}
// 			{/* Main Entries Section */}
// 			<div className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-2 min-h-screen h-auto flex justify-center">
// 				<div className="w-11/12 bg-[#05202a] text-sky-300 border-2 border-sky-700 mx-10 min-h-screen h-full rounded-tl-2xl mt-5 rounded-tr-2xl p-6 shadow-lg shadow-black/30">
// 					<h2 className="text-2xl font-bold mb-4">All Entries</h2>
// 					{/* <p className="text-slate-400">Your entries will appear here...</p> */}
// 					<div className="border-2 border-sky-700 bg-cyan-950 rounded-md p-2 w-full">
// 						4/13/2025
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
