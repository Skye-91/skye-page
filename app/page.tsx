// import Link from "next/link"
import { redirect } from "next/navigation"

export default function HomePage() {
	redirect("/games")

	// return (
	// 	<>
	// 		<ul className="list-disc pl-5">
	// 			<li>
	// 				<Link className="link link-hover underline" href="/games">
	// 					Games
	// 				</Link>
	// 			</li>
	// 		</ul>
	// 	</>
	// )
}
