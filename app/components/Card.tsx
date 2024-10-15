/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export type Status = "Completed" | "Dropped" | "In Progress"

export type Game = {
	title: string
	score: number
	status?: Status
	tags: string[]
}

interface Props {
	card: Game
}

export default function Card({ card }: Props) {
	return (
		<div className="card bg-neutral shadow-xl z-0">
			<Link href={"/games/" + card.title}>
				<figure>
					<img
						className="pt-3 px-2 rounded-2xl"
						src="https://howlongtobeat.com/games/TheElderScrollsVSkyrimLegendaryEdition.jpg?width=250"
						alt="Shoes"
					/>
				</figure>
				<div className="card-body pt-5 text-neutral-content">
					<h2 className="card-title">{card.title}</h2>
					{card.status && (
						<div
							className={
								"badge badge-" +
								(card.status === "Completed"
									? "primary"
									: card.status === "Dropped"
									? "error"
									: "secondary")
							}
						>
							{card.status}
						</div>
					)}

					<p>⭐ {card.score}</p>
					<div className="card-actions">
						{card.tags.map((tag) => (
							<div key={tag} className="badge badge-outline">
								{tag}
							</div>
						))}
					</div>
				</div>
			</Link>
		</div>
	)
}
