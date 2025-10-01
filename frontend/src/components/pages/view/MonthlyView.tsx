import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function MonthlyView() {
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

	const location = useLocation();
	const collectionYear = +location.pathname.split("/")[3];
	const currentMonth = new Date().getMonth();
	const [selectedMonth, setSelectedMonth] = useState(-1);
	const [numberOfDays, setNumberOfDays] = useState(-1);
	const todaysDate = new Date().getDate();

	// TODO - maybe have it so that the days the user has entries for, their background color is different

	useEffect(() => {
		if (selectedMonth >= 0) {
			const numberDaysInMonth = new Date(
				collectionYear,
				selectedMonth + 1,
				0
			).getDate();
			setNumberOfDays(numberDaysInMonth);
		}
	}, [selectedMonth]);

	return (
		<div className="w-full flex flex-col items-center hover:cursor-pointer">
			{months.map((month: string, index: number) =>
				selectedMonth === index ? (
					<div
						className={`${
							index === currentMonth ? "" : ""
						} mb-3 w-full rounded-md`}
					>
						<div
							key={month}
							className={`${
								index === currentMonth ? "bg-green-700" : ""
							} p-2 flex items-center w-full mb-3 h-13 rounded-md`}
							onClick={() => {
								if (selectedMonth !== -1) setSelectedMonth(index);
								if (selectedMonth === index) setSelectedMonth(-1);
							}}
						>
							<h3 className="font-semibold text-xl">{month}</h3>
						</div>
						<div className="p-2 grid grid-cols-9 gap-3 w-max mx-auto">
							{Array.from({ length: numberOfDays }).map((_, index) => (
								<Link
									to={`/view/${collectionYear}/${months[
										selectedMonth
									].toLowerCase()}/${index + 1}`}
								>
									<div
										key={index}
										className={`w-20 h-11 rounded-md flex items-center text-lg justify-center my-3 hover:cursor-pointer bg-green-600 ${
											currentMonth === selectedMonth &&
											todaysDate === index + 1 &&
											"border-2 border-amber-400"
										}`}
									>
										{index + 1}
									</div>
								</Link>
							))}
						</div>
					</div>
				) : (
					<div
						key={month}
						className={`${
							index === currentMonth ? "bg-green-600" : "bg-green-800"
						} p-2 flex items-center w-full mb-3 h-13 rounded-md`}
						onClick={() => {
							setSelectedMonth(index);
						}}
					>
						<h3 className="font-semibold">{month}</h3>
					</div>
				)
			)}
		</div>
	);
}
