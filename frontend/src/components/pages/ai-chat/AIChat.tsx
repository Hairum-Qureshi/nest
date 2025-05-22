import background from "../../assets/background.png";

export default function AIChat() {
	return (
		<div
			style={{ backgroundImage: `url(${background})` }}
			className="bg-cover bg-no-repeat w-full min-h-screen max-h-auto"
		>
			<div className="w-full h-screen flex items-start justify-center pt-40 overflow-y-auto">
				<div className="flex flex-col items-center">
					<h1 className="text-5xl text-amber-300 font-semibold drop-shadow-[0_0_5px_#22c55e]">
						Hi, I'm Remi
					</h1>
					<h3 className="text-green-400 mt-4 w-2/3 text-center text-lg drop-shadow-[0_0_5px_#22c55e]">
						I'm an AI who follows along with your stories, with the sole goal of
						helping you recall memories, understand what they mean, and reflect
						on your journey.
					</h3>
					<div className="w-full absolute bottom-0 p-3 flex justify-center">
						<div className="flex flex-col items-center min-w-3/5">
							<textarea className="w-full border-2 border-green-600 rounded-md p-3 bg-green-950 text-white outline-none mb-2 resize-y h-12 min-h-10 max-h-40 flex items-center text-lg" />
							<p className="text-lime-500 text-sm">Remi can make mistakes</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
