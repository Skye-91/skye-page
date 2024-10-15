/* eslint-disable @next/next/no-img-element */
export type Status = "Completed" | "Dropped" | "In Progress"

export type Game = {
	title: string
	score: number
	status?: Status
	tags: string[]
	imageUrl: string
	review?: string
	timesCompleted?: number
}

interface Props {
	card: Game
}

export default function Card({ card }: Props) {
	const handleModalOpen = () => {
		const modal = document.getElementById("modal " + card.title)
		if (modal) {
			;(modal as HTMLDialogElement).showModal()
		}
	}

	let badgeStatus = "badge"

	switch (card.status) {
		case "Completed":
			badgeStatus += " badge-primary"
			break
		case "Dropped":
			badgeStatus += " badge-error"
			break
		case "In Progress":
			badgeStatus += " badge-secondary"
			break
		default:
			break
	}

	return (
		<>
			<div
				className="card bg-neutral shadow-xl z-0 cursor-pointer"
				onClick={handleModalOpen}
			>
				<figure>
					<img
						className="pt-3 px-2 rounded-2xl"
						src={card.imageUrl}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body pt-5 text-neutral-content">
					<h2 className="card-title">{card.title}</h2>
					{card.status && (
						<div className={badgeStatus}>{card.status}</div>
					)}

					<div>⭐ {card.score}</div>
					<div className="card-actions">
						{card.tags.map((tag) => (
							<div key={tag} className="badge badge-outline">
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>

			<dialog
				id={"modal " + card.title}
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg text-primary">
						Review {card.title}
					</h3>
					<h4 className="font-bold text-md italic">
						Completed {card.timesCompleted} time
						{card.timesCompleted && card.timesCompleted > 1 && "s"}
					</h4>
					<hr className="mt-1" />
					<p
						className="py-4"
						dangerouslySetInnerHTML={{
							__html: card.review as string,
						}}
					></p>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}
