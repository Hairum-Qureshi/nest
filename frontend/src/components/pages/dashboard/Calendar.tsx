import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const [year, setYear] = useState<number>(
		currentDate.getFullYear() || currentDate.getUTCFullYear()
	);

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

	const month = currentDate.toLocaleString("default", { month: "long" });

	// ! BUG - highlighting today's date doesn't work when you switch months

	const nextMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
		);

		if (month === "December") {
			setYear(year + 1);
		}
	};

	const prevMonth = () => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
		);

		if (month === "January") {
			setYear(year - 1);
		}
	};

	const goToday = () => {
		setCurrentDate(new Date());
		setYear(new Date().getFullYear());
	};

	const startOfMonth = new Date(year, currentDate.getMonth(), 1);
	const endOfMonth = new Date(year, currentDate.getMonth() + 1, 0);
	const numDays = endOfMonth.getDate();

	// Index of first day (0=Sun, 6=Sat)
	const startDay = startOfMonth.getDay();

	// Build an array of cells
	const days: (number | null)[] = [];
	for (let i = 0; i < startDay; i++) {
		days.push(null); // empty slot
	}
	for (let d = 1; d <= numDays; d++) {
		days.push(d);
	}

	return (
		<section className="relative py-8 sm:p-8">
			<div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14">
				{/* Header with buttons */}
				<div className="flex items-center justify-between mb-5">
					{/* Left side: month + year */}
					<h5 className="text-2xl font-semibold text-white">
						{month} {year}
					</h5>

					{/* Right side: input + today + arrows */}
					<div className="flex items-center gap-2 text-white w-1/2">
						<input
							type="number"
							placeholder="Jump to year"
							className="p-1.5 text-base w-1/2 ml-auto text-slate-100 border border-green-500 outline-none rounded-md"
							min={1970}
							max={3000}
							value={year}
							onChange={e => setYear(Number(e.target.value))}
						/>
						<button
							onClick={goToday}
							className="hidden md:flex py-2 px-3 rounded-md bg-green-900 border border-green-700 text-xs font-medium text-white hover:bg-green-800 hover:cursor-pointer"
						>
							Today
						</button>
						<div className="flex">
							<button
								onClick={prevMonth}
								className="text-white rounded px-2 hover:cursor-pointer"
								title="Left arrow"
							>
								<FaArrowLeft />
							</button>
							<button
								onClick={nextMonth}
								className="text-white rounded hover:cursor-pointer px-2"
								title="Right arrow"
							>
								<FaArrowRight />
							</button>
						</div>
					</div>
				</div>

				{/* Calendar */}
				{year < 1970 || year > 3000 ? (
					<p className="text-red-500">Please enter a valid year (1970-3000)</p>
				) : (
					<div className="border border-green-800 rounded-lg overflow-hidden">
						<div className="grid grid-cols-7 gap-px bg-green-800">
							{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
								<div
									key={d}
									className="bg-green-900 py-2 text-center text-xs font-medium text-white uppercase"
								>
									{d}
								</div>
							))}
						</div>
						<div className="grid grid-cols-7 gap-px bg-green-800">
							{days.map((d, i) =>
								d ? (
									<Link
										to={`/view/${year}/${months.indexOf(month) + 1}/${d}`}
										key={i}
									>
										<div
											className={`h-24 ${
												currentDate.getDate() === d &&
												months[currentDate.getMonth()] === month &&
												year === new Date().getFullYear()
													? "bg-green-500"
													: "bg-green-950"
											} relative p-2 text-xs text-gray-200`}
										>
											<span className="absolute top-1 left-1 text-white">
												{d}
											</span>
											<span className="absolute top-10">Entry not written</span>
										</div>
									</Link>
								) : (
									<div
										key={i}
										className="h-24 bg-green-950 relative p-2 text-xs text-gray-200"
									/>
								)
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
