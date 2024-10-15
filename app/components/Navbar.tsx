import Link from "next/link"
import ThemeController from "./ThemeController"

export default function Navbar() {
	return (
		<div className="navbar bg-base-200 sticky top-0 z-10">
			<div className="flex-1 text-3xl font-bold">
				<Link href="/">Skye Page</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<ThemeController />
				</ul>
			</div>
		</div>
	)
}
