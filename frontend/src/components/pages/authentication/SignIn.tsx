import { useState } from "react";
import useAuth from "../../../hooks/useAuth";

export default function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useAuth();

	return (
		<div className="w-full blur-none text-white p-2">
			<div className="m-10">
				<h3 className="text-3xl font-semibold drop-shadow-[0_0_5px_#22c55e]">
					Create Your Nest
				</h3>
				{/* <div className="mt-2 w-full h-auto border-2 border-red-500 p-2 rounded-md text-red-700">
                    Incorrect email or password
                </div> */}
				<form
					className="mt-3 p-2 flex flex-col w-full drop-shadow-[0_0_5px_#22c55e]"
					onSubmit={e => signIn(e, email, password)}
				>
					<div className="w-full mb-5">
						<input
							type="email"
							placeholder="Email"
							className="p-3 border-2 border-green-600 rounded-md w-full text-lg outline-none"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="w-full mb-5">
						<input
							type="password"
							placeholder="Password"
							className="p-3 border-2 border-green-600 rounded-md w-full text-lg outline-none"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<div>
						<button className="bg-white p-2 text-black rounded-md w-full mt-10 font-semibold text-lg hover:cursor-pointer">
							Sign In
						</button>
					</div>
				</form>
				<div className="mt-8">
					<p className="text-center p-2 text-sm">
						Don't have an account?&nbsp;
						<a href="/sign-up" className="text-lime-400 font-semibold">
							Sign Up
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
