import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { RoleLayout } from "./layouts/RoleLayout";
import { AuthProvider } from "./context/AuthContext";
import { roleSpecificRoutes, defaultAppRedirect } from "./config/routes.tsx";
import { VALID_ROLES } from "./config/roles";

export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Navigate to={defaultAppRedirect} replace />}
					/>

					{VALID_ROLES.map((role) => {
						const routesForRole = roleSpecificRoutes[role];
						const defaultRouteForRole =
							routesForRole.find((r) => r.isIndex)?.path ||
							(routesForRole.length > 0 ? routesForRole[0].path : "home");

						return (
							<Route key={role} path={`/${role}`} element={<RoleLayout />}>
								<Route
									index
									element={<Navigate to={defaultRouteForRole} replace />}
								/>
								{routesForRole.map((routeConfig) => (
									<Route
										key={routeConfig.path}
										path={routeConfig.path}
										element={routeConfig.element}
									/>
								))}
							</Route>
						);
					})}
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}
