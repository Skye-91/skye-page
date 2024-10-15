import Link from "next/link"

export default function HomePage() {
	return (
		<>
			<ul className="list-disc pl-5">
				<li>
					<Link className="link link-hover underline" href="/games">
						Games
					</Link>
				</li>
				<li>
					<Link className="link link-hover underline" href="/anime">
						Anime
					</Link>
				</li>
			</ul>
		</>
	)
}
