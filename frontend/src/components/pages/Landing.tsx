import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div className="bg-[url(https://images.unsplash.com/photo-1648878136531-15e7d3a88e76?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] object-cover w-full h-screen">
			<div className="text-white drop-shadow-[0_0_5px_#22c55e] text-center">
				<div className="flex justify-center ">
					<div className="border border-white p-1 lg:w-1/2 w-3/4 text-left rounded-md mt-2 flex items-center">
						<Link to="/about">
							<div className="p-1 mr-2">
								<p>About</p>
							</div>
						</Link>
						<div className="p-1 ml-2">
							<p>Privacy</p>
						</div>
					</div>
				</div>
				<div className="p-2">
					<h1 className="mt-20 font-semibold text-9xl">Introducing Nest</h1>
					<div className="mt-10 text-emerald-200 text-3xl">
						<p>a new way to remember and keep memories</p>
					</div>
				</div>
			</div>
		</div>
	);
}
