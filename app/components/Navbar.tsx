import ThemeController from "./ThemeController"

export default function Navbar() {
	return (
		<div className="navbar bg-base-200 sticky top-0">
			<div className="flex-1 text-3xl font-bold">Skye Page</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<ThemeController />
				</ul>
			</div>
		</div>
	)
}
