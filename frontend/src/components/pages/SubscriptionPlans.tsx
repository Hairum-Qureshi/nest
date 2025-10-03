import background from "../../assets/background.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function SubscriptionPlans() {
	return (
		<div
			style={{ backgroundImage: `url(${background})` }}
			className="bg-cover bg-no-repeat w-full min-h-screen flex flex-col items-center justify-start"
		>
			{/* Buttons at top */}
			<div className="text-white flex space-x-4 mt-16">
				<button className="px-4 py-2 border border-white rounded">
					Monthly
				</button>
				<button className="px-4 py-2 border border-white rounded">
					Yearly
				</button>
			</div>

			{/* Cards below */}
			<div className="w-11/12 mt-20 flex justify-center items-center space-x-5 text-white">
				<div className="flex-1 p-4 border border-green-600 rounded-md min-h-2/3 bg-gradient-to-tr from-black to-green-700">
					<div className="m-2">
						<h2 className="text-3xl">Hook Tier</h2>
						<h3 className="text-2xl text-green-400">$0.00/month</h3>
						<p className="my-4 text-slate-200">
							Write unlimited diary entries and explore AI insights with limited
							daily use. Perfect for trying out the app before committing.
						</p>
						<p className="text-xl font-semibold mb-2">Tier Includes:</p>
						<ul>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Unlimited diary entries
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								15 AI queries per day (search, Q&A, entry summaries)
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Store & manage uploaded files/images (10MB per file, 250MB
								total)
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Export diary text only
							</li>
						</ul>
						<button className="mt-4 w-full hover:cursor-pointer bg-green-600 rounded-md p-2">
							Current Plan
						</button>
					</div>
				</div>
				<div className="flex-1 p-4 border border-green-600 rounded-md min-h-11/12 bg-gradient-to-t from-black to-green-700 shadow-lg transform scale-105">
					<div className="m-2">
						<h2 className="text-3xl">Pro Tier</h2>
						<h3 className="text-2xl text-green-400">$5.99/month</h3>
						<p className="my-4 text-slate-200">
							Unlock unlimited queries, attach images to your diaries, and
							download your AI conversations. Ideal for regular journalers who
							want more freedom.
						</p>
						<p className="text-xl font-semibold mb-2">
							Tier includes everything from free plus:
						</p>
						<ul>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Unlimited AI queries
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Attach images directly to diary entries
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Larger file storage (50MB per file, 2GB total)
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								Download AI chat history
							</li>
						</ul>
						<button className="mt-4 w-full hover:cursor-pointer bg-green-600 rounded-md p-2">
							Choose Tier
						</button>
					</div>
				</div>
				<div className="flex-1 p-4 border border-green-600 rounded-md min-h-2/3 bg-gradient-to-tl from-black to-green-700">
					<div className="m-2">
						<h2 className="text-3xl">Premium Tier</h2>
						<h3 className="text-2xl text-green-400">$13.99/month</h3>
						<p className="my-4 text-slate-200">
							Get full long-term reflections, growth-focused summaries, and
							access to advanced export options. Best for serious users who want
							AI as a true reflection partner.
						</p>
						<p className="text-xl font-semibold mb-2">
							Tier includes everything from pro plus:
						</p>
						<ul>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								TBD
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								TBD
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								TBD
							</li>
							<li className="flex items-center">
								<span className="mr-2 text-green-500">
									<IoIosCheckmarkCircle />
								</span>
								TBD
							</li>
						</ul>
						<button className="mt-4 w-full hover:cursor-pointer bg-green-600 rounded-md p-2">
							Choose Tier
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
