import background from "../../assets/background.png";

export default function Landing() {
	return (
		<div
			style={{ backgroundImage: `url(${background})` }}
			className="bg-cover bg-no-repeat w-full min-h-screen relative"
		>
			<div className="w-1/6 bg-green-950 p-2 absolute left-0 min-h-screen h-full"></div>

			<div className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-3">
				<div className="mt-3">
					<input
						type="text"
						placeholder="Search Entries by title or date"
						className="p-2 text-base text-green-300 w-full outline-none border rounded-md"
					/>
				</div>
			</div>
			<div className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-2 flex justify-center">
				<div className="w-full border-2 border-green-700 rounded-md p-2 mx-10 mt-10 min-h-60"></div>
			</div>
			<div className="ml-[16.6667%] w-[calc(100%-16.6667%)] p-2 min-h-screen h-auto flex justify-center">
				<div className="w-11/12 border-2 border-green-500 mx-10 min-h-screen h-full rounded-tl-2xl mt-10 rounded-tr-2xl"></div>
			</div>
		</div>
	);
}
