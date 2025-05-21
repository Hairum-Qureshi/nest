export default function SignUp() {
	return (
		<div className="w-full blur-none drop-shadow-[0_0_5px_#22c55e] text-white p-2">
			<div className="m-10">
				<h3 className="text-3xl font-semibold">Create Your Nest</h3>
				<form className="mt-5 p-2 flex flex-col w-full">
					<div></div>
					<div className="w-full mb-5">
						<input
							type="text"
							placeholder="Full Name"
							className="p-3 border-2 border-green-600 rounded-md w-full text-lg outline-none"
						/>
					</div>
					<div className="w-full mb-5">
						<input
							type="email"
							placeholder="Email"
							className="p-3 border-2 border-green-600 rounded-md w-full text-lg outline-none"
						/>
					</div>
					<div className="w-full mb-5">
						<input
							type="password"
							placeholder="Password"
							className="p-3 border-2 border-green-600 rounded-md w-full text-lg outline-none"
						/>
					</div>
					<div className="w-full">
						<input
							type="password"
							placeholder="Confirm Password"
							className="p-3 border-2 border-green-600 rounded-md w-full text-lg outline-none"
						/>
					</div>
					<div>
						<button className="bg-white p-2 text-black rounded-md w-full mt-10 font-semibold text-lg hover:cursor-pointer">
							Join Nest
						</button>
					</div>
				</form>
				<div className="mt-8">
					<p className="text-center p-2 text-sm">
						By joining Nest, you agree to our
						<a href="/privacy" className="text-lime-400 font-semibold">
							&nbsp;Privacy Policy
						</a>{" "}
						and&nbsp;
						<a href="/terms" className="text-lime-400 font-semibold">
							Terms of Service
						</a>
					</p>
					<p className="text-center p-2 text-sm">
						Already have an account?&nbsp;
						<a href="/sign-in" className="text-lime-400 font-semibold">
							Log in
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
