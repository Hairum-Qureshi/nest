import { Navigate, useLocation } from "react-router-dom";
import SideBar from "./SideBar";

//! Dummy auth (replace with real auth logic)
const isAuthenticated = true; // TODO replace with real auth check

export default function ProtectedRoutesGuard({
	children
}: React.PropsWithChildren) {
	const location = useLocation();

	const isDashboard =
		location.pathname.includes("/dashboard") ||
		location.pathname.includes("/year");
	const isAIChat = location.pathname.includes("/chat");
	const isDiary = location.pathname.includes("/view");

	if (!isAuthenticated) {
		return <Navigate to="/sign-in" state={{ from: location }} replace />;
	}

	if (isDashboard || isAIChat || isDiary) {
		return (
			<div className="flex w-full h-screen">
				<SideBar />
				<div className="flex-1 overflow-y-auto">{children}</div>
			</div>
		);
	}

	// For non-dashboard pages (but still protected)
	return <>{children}</>;
}
