import { useLocation } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function MainAuthentication() {
	const location = useLocation();
	return (
		<div className="lg:flex w-full h-screen bg-green-950">
			<div className="relative lg:w-3/5 w-full lg:h-full h-1/2 overflow-hidden flex items-center justify-center">
				<div
					className="absolute inset-0 bg-cover bg-no-repeat brightness-60 z-0 blur-xs"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1708779493105-9c743e367a3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
					}}
				></div>
				<div className="relative z-10 text-white drop-shadow-[0_0_5px_#22c55e] text-5xl font-semibold text-center">
					<h1>
						Journaling re-imagined with AI. <br />
						<br /> For Free.
					</h1>
				</div>
			</div>

			<div className="relative lg:w-2/5 w-full lg:h-full min-h-1/2 h-auto overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-no-repeat blur-sm  brightness-60 rotate-180 z-0"
					style={{
						backgroundImage: `url("https://images.unsplash.com/photo-1708779493105-9c743e367a3c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
					}}
				></div>
				<div className="relative z-10">
					{location.pathname.includes("/sign-up") ? <SignUp /> : <SignIn />}
				</div>
			</div>
		</div>
	);
}
