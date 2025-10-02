import { IoIosLock, IoLogoMarkdown } from "react-icons/io";
import PassCodeInput from "../PassCodeInput";
import Toolbar from "../wysiwyg-editor/Toolbar";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosUnlock } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Diary() {
	const [markdownEnabled, setMarkdownEnabled] = useState(false);
	const isPasswordProtected = false;
	const { month, day, year } = useParams();
	const date = new Date(`${year}-${month}-${day}`).getDay();
	const weekDay = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	][date];

	return (
		<div
			className={`min-h-screen text-white relative ${
				isPasswordProtected ? "bg-slate-950" : "bg-[#000000]"
			} p-10 w-full`}
		>
			<div className="w-5/6 m-auto p-2">
				<div className="flex items-center">
					<div className="flex">
						<div className="flex flex-col items-center justify-center">
							<div className="flex text-3xl font-semibold">
								{Number(day) < 10 ? `0${day}` : day}
							</div>
							<div className="text-xl">{weekDay}</div>
						</div>
						<h2 className="ml-3 text-6xl">{year}</h2>
					</div>
					<div className="flex flex-col ml-auto">
						<div className="flex-row justify-end items-center">
							<button className="mr-2 bg-green-700 hover:bg-green-500 hover:cursor-pointer rounded-md px-1 py-0.5 active:bg-green-600">
								Collections
							</button>
							<div className="w-10 text-lg border border-green-700 hover:bg-green-600 hover:cursor-pointer rounded-tl-md rounded-bl-md p-1 active:bg-green-500">
								<p className="ml-2">
									<FaArrowLeft />
								</p>
							</div>
							<div className="w-10 text-lg border border-green-700 hover:bg-green-600 hover:cursor-pointer active:bg-green-500 rounded-tr-md rounded-br-md p-1 flex justify-end">
								<p className="mr-2">
									<FaArrowRight />
								</p>
							</div>
						</div>
						{!isPasswordProtected && (
							<div className="flex my-3">
								<button
									title="Copy link button"
									className="p-1 mr-3 border border-green-700 hover:bg-green-600 hover:cursor-pointer rounded-sm"
								>
									<FaLink />
								</button>
								<button
									title="Edit button"
									className="p-1 mr-3 border border-green-700 hover:bg-green-600 hover:cursor-pointer rounded-sm"
								>
									<FaEdit />
								</button>
								<button
									title="Delete button"
									className="p-1 border border-green-700 hover:bg-green-600 hover:cursor-pointer rounded-sm mr-3"
								>
									<MdDelete />
								</button>
								<button
									title="Unlock button"
									className="p-1 border border-green-700 hover:bg-green-600 hover:cursor-pointer rounded-sm mr-3"
								>
									<IoIosUnlock />
								</button>
								<button
									title="Markdown button"
									className={`p-1 ${
										markdownEnabled && "bg-green-500"
									} border border-green-700 hover:bg-green-600 active:bg-green-700 hover:cursor-pointer rounded-sm`}
									onClick={() => setMarkdownEnabled(!markdownEnabled)}
								>
									<IoLogoMarkdown />
								</button>
							</div>
						)}
					</div>
				</div>
				<div className="flex items-center">
					<span className="mr-4 text-amber-400 text-2xl tracking-widest font-semibold italic font-zeyada">
						{month}
					</span>
					<hr className="flex-grow border-t border-green-500" />
					<hr className="flex-grow border-t border-green-500" />
				</div>
				{isPasswordProtected ? (
					<div>
						<h1 className="mt-32 flex items-center justify-center">
							<span className="mr-5 text-6xl">
								<IoIosLock />
							</span>
							<div>
								<p className="text-3xl">
									This diary entry is passcode protected.
								</p>
								<p className="text-2xl text-green-600">
									Please enter your passcode below:
								</p>
							</div>
						</h1>
						<div className="mt-5">
							<PassCodeInput center={true} />
						</div>
						<div className="flex flex-col items-center">
							<button className="p-1.5 bg-green-800 rounded-md w-1/4 mt-7 mb-2 hover:cursor-pointer hover:bg-green-600 active:bg-green-500">
								Enter
							</button>
							<p className="text-sm text-slate-100">Attempt 1 of 5</p>
						</div>
					</div>
				) : !markdownEnabled ? (
					<div className="flex justify-center mt-5">
						<Toolbar />
					</div>
				) : (
					<p className="text-center text-green-500 mt-5">
						Markdown is currently enabled. Press the markdown button to disable
						markdown
					</p>
				)}
			</div>
		</div>
	);
}
