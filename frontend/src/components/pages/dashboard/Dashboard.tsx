import { useState } from "react";
import Calendar from "./Calendar";
import { Link } from "react-router-dom";

export default function Landing() {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	const [currentTab, setCurrentTab] = useState("calendar");
	const [collectionSelected, setCollectionSelected] = useState(false);
	const [selectedYear, setSelectedYear] = useState<number>();
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

	const numDaysInMonth =
		selectedMonth && selectedYear
			? new Date(selectedYear, months.indexOf(selectedMonth) + 1, 0).getDate()
			: 0;

	return (
		<div className="w-full min-h-screen relative bg-[#09100d] p-10">
			<h1 className="text-white font-semibold text-2xl mb-5">Hey, Hairum</h1>

			{/* Tabs */}
			<div className="text-sm font-medium text-center border-b border-gray-200">
				<ul className="flex flex-wrap -mb-px">
					<li className="me-2">
						<p
							className={`relative inline-block p-4 text-gray-400
								after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
								after:w-0 after:transition-all after:duration-300 hover:cursor-pointer
								${
									currentTab === "calendar"
										? "text-green-600 after:w-full after:bg-green-600"
										: "hover:text-slate-400 hover:after:w-full hover:after:bg-slate-300"
								}`}
							onClick={() => {
								setCurrentTab("calendar");
								setCollectionSelected(false);
								setSelectedMonth(null);
							}}
						>
							Calendar
						</p>
					</li>

					<li className="me-2">
						<p
							className={`relative inline-block p-4 text-gray-400
								after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
								after:w-0 after:transition-all after:duration-300 hover:cursor-pointer
								${
									currentTab === "collections"
										? "text-green-600 after:w-full after:bg-green-600"
										: "hover:text-slate-400 hover:after:w-full hover:after:bg-slate-300"
								}`}
							onClick={() => {
								setCurrentTab("collections");
								setSelectedMonth(null);
							}}
						>
							Collections
						</p>
					</li>
				</ul>
			</div>

			{/* Main Content */}
			{currentTab === "calendar" ? (
				<Calendar />
			) : (
				<div className="mt-6 text-white">
					{/* Breadcrumb */}
					{collectionSelected && selectedYear && (
						<div className="flex" aria-label="Breadcrumb">
							<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
								<li className="inline-flex items-center">
									<p
										className="inline-flex items-center text-sm font-medium text-white hover:text-green-400 hover:cursor-pointer"
										onClick={() => setCollectionSelected(false)}
									>
										Collections
									</p>
								</li>
								<li>
									<div className="flex items-center">
										<svg
											className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 6 10"
										>
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="m1 9 4-4-4-4"
											/>
										</svg>
										<p
											className="ms-1 text-sm font-medium text-gray-700 hover:text-green-400 md:ms-2 dark:text-gray-400 dark:hover:text-white hover:cursor-pointer"
											onClick={() => setCollectionSelected(false)}
										>
											{selectedYear}
										</p>
									</div>
								</li>
								{selectedMonth && (
									<li aria-current="page">
										<div className="flex items-center">
											<svg
												className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
												aria-hidden="true"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 6 10"
											>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="m1 9 4-4-4-4"
												/>
											</svg>
											<span
												className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400 hover:text-green-400 hover:cursor-pointer"
												onClick={() => setSelectedMonth(null)}
											>
												{selectedMonth}
											</span>
										</div>
									</li>
								)}
							</ol>
						</div>
					)}

					{/* Months */}
					{selectedYear &&
						collectionSelected &&
						!selectedMonth &&
						months.map((month, index) => (
							<div key={index}>
								<div
									className="my-5 w-full p-2 rounded-md bg-green-800 border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:cursor-pointer"
									onClick={() => {
										setSelectedMonth(month);
										setSelectedYear(selectedYear);
									}}
								>
									{month}
								</div>
							</div>
						))}
					{/* Days */}
					{collectionSelected && selectedMonth && selectedYear && (
						<div>
							<input
								type="text"
								className="w-full p-3 mt-5 text-base text-white border border-green-400 rounded-md outline-none"
								placeholder="Search diary entries..."
							/>
							<div className="my-5 ms-auto flex flex-col">
								{Array.from({ length: numDaysInMonth }).map((_, index) => {
									const date = new Date(
										selectedYear,
										months.indexOf(selectedMonth) + 1,
										index + 1
									);
									const weekday = date.toLocaleDateString("en-US", {
										weekday: "long"
									});

									return (
										<Link
											to={`/view/${selectedYear}/${selectedMonth}/${index + 1}`}
										>
											<div
												key={index}
												className="w-full my-3 flex items-center p-3 text-white border border-green-600 hover:border-green-500 rounded-sm bg-green-950"
											>
												{/* Date box */}
												<div className="flex flex-col items-center justify-center w-16 h-20 rounded-md shadow-sm">
													<h2 className="font-semibold text-3xl">
														{index + 1 < 10 ? `0${index + 1}` : index + 1}
													</h2>
													<p className="text-sm text-green-400">{weekday}</p>
												</div>

												{/* Optional extra content space */}
												<div className="ml-7 flex-1 text-left">
													<p className="text-sm text-gray-300">
														Diary details go here
													</p>
												</div>
											</div>
										</Link>
									);
								})}
							</div>
						</div>
					)}

					{/* Year List */}
					{!collectionSelected && (
						<>
							<div
								className="my-5 w-full p-2 rounded-md bg-green-800 border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:cursor-pointer"
								onClick={() => {
									setCollectionSelected(true);
									setSelectedYear(2024);
								}}
							>
								Year 2024
							</div>
							<div
								className="my-5 w-full p-2 rounded-md bg-green-800 border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:cursor-pointer"
								onClick={() => {
									setCollectionSelected(true);
									setSelectedYear(2025);
								}}
							>
								Year 2025
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}
