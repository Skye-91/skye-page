/* eslint-disable @next/next/no-img-element */
import { Game } from "../types/Game"

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
			badgeStatus += " badge-success"
			break
		case "Dropped":
			badgeStatus += " badge-error"
			break
		case "In Progress":
			badgeStatus += " badge-warning"
			break
		case "To Play":
			badgeStatus += " badge-info"
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
						alt={card.title}
					/>
				</figure>
				<div className="card-body pt-5 text-neutral-content">
					<h2 className="card-title">{card.title}</h2>
					{card.status && (
						<div className={badgeStatus}>{card.status}</div>
					)}
					{card.score !== undefined && card.score >= 0 && (
						<div>⭐ {card.score}</div>
					)}

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
						{card.title}
					</h3>
					{card.timesCompleted !== undefined && (
						<h4 className="font-bold text-md italic">
							Completed {card.timesCompleted} time
							{card.timesCompleted &&
								card.timesCompleted > 1 &&
								"s"}
						</h4>
					)}

					<hr className="mt-1" />
					<div
						id="container"
						className="grid grid-cols-[3fr,2fr] gap-4"
					>
						{card.review !== undefined && (
							<p
								className="py-4"
								dangerouslySetInnerHTML={{
									__html: card.review as string,
								}}
							></p>
						)}
						{card.review === undefined && (
							<p className="py-4">No review.</p>
						)}

						<div
							className={
								"grid grid-rows-" +
								(card.categoryScores === undefined ? 1 : 2) +
								" gap-2" +
								" items-start"
							}
						>
							<div className="row-span-1 ">
								<img
									className="pt-3 px-2 rounded-2xl"
									src={card.imageUrl}
									alt={card.title}
								/>
							</div>
							{card.categoryScores !== undefined && (
								<div className="row-span-1 pt-2">
									<>
										<p className="italic">
											🌌 Graphics/Art style:{" "}
											<span className="text-primary">
												{card.categoryScores.graphics}
											</span>
										</p>
										<p className="italic">
											📖 Story:{" "}
											<span className="text-primary">
												{card.categoryScores.story}
											</span>
										</p>
										<p className="italic">
											🕹️ Gameplay:{" "}
											<span className="text-primary">
												{card.categoryScores.gameplay}
											</span>
										</p>
										<p className="italic">
											🎵 Music:{" "}
											<span className="text-primary">
												{card.categoryScores.music}
											</span>
										</p>
										<p className="italic">
											🎭 Fun:{" "}
											<span className="text-primary">
												{card.categoryScores.fun}
											</span>
										</p>
										{card.score !== undefined && (
											<>
												<hr className="mt-1" />
												<p className="text-xl font-bold">
													Overall:{" "}
													<span className="text-accent">
														{card.score}
													</span>
												</p>
											</>
										)}
									</>
								</div>
							)}
						</div>
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	)
}
