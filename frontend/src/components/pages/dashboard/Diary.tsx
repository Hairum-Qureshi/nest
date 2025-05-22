import { MdDelete } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Diary() {
	const [starred, setStarred] = useState(false);

	return (
		<div className="p-3 bg-[#15292f] rounded-md hover:bg-sky-950 hover:border hover:border-sky-600 text-sky-200 cursor-pointer transition">
			<div className="flex items-center">
				<div className="flex-col">
					{starred ? (
						<FaRegStar
							className="text-sky-400 text-xl mr-3"
							onClick={() => setStarred(!starred)}
						/>
					) : (
						<FaStar
							className="text-amber-400 text-xl mr-3"
							onClick={() => setStarred(!starred)}
						/>
					)}
					{/* add checkbox */}
				</div>

				<div>
					<h3 className="text-lg font-semibold">Title</h3>
					<p className="text-sm text-slate-400">Date</p>
				</div>
			</div>
		</div>
	);
}
