import Link from "next/link"
import ThemeController from "./ThemeController"

interface Props {
	location?: string
}

export default function Navbar({ location }: Props) {
	return (
		<div className="navbar bg-base-200 sticky top-0 z-10">
			<div className="breadcrumbs text-sm flex-1">
				<ul>
					<li>
						<div className="text-3xl font-bold">
							<Link href="/">Skye Page</Link>
						</div>
					</li>
					{location && (
						<li>
							<div className="text-3xl">{location}</div>
						</li>
					)}
				</ul>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<ThemeController />
				</ul>
			</div>
		</div>
	)
}
