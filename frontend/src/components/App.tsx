import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import MainAuthentication from "./pages/authentication/MainAuthentication";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutesGuard from "./ProtectedRoutesGuard";
import AIChat from "./pages/ai-chat/AIChat";
import useStore from "../hooks/zustand/authStore";
import { useEffect } from "react";

export default function App() {
	const getCurrentUserData = useStore(state => state.getCurrentUserData);

	useEffect(() => {
		getCurrentUserData();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/sign-up" element={<MainAuthentication />} />
				<Route path="/sign-in" element={<MainAuthentication />} />
				{/* <Route path="/dashboard" element={<Dashboard />} /> */}
				<Route
					path="/dashboard"
					element={
						<ProtectedRoutesGuard>
							<Dashboard />
						</ProtectedRoutesGuard>
					}
				/>
				<Route
					path="/chat"
					element={
						<ProtectedRoutesGuard>
							<AIChat />
						</ProtectedRoutesGuard>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}
