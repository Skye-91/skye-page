/* eslint-disable @next/next/no-img-element */
import { Game } from "../types/Game"
import ScoreBar from "./ScoreBar"

interface Props {
	card: Game
}

export default function Card({ card }: Props) {
	const handleModalOpen = () => {
		const modal = document.getElementById("modal-" + card.title)
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
			{/* CARD DISPLAY */}
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

			{/* MODAL DISPLAY */}

			<dialog
				id={"modal-" + card.title}
				className="modal modal-bottom sm:modal-middle"
			>
				<div className="modal-box w-full max-w-4xl lg:max-w-5xl">
					{/* Head */}
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

					<hr className="mt-1 border border-primary" />

					{/* Body */}
					<div
						id={"container-modal-" + card.title}
						className="grid grid-cols-1 lg:grid-cols-[4fr,1fr] gap-4"
					>
						{/* Body -> Left -> Review */}
						<div>
							{card.review ? (
								<p
									className="my-4"
									dangerouslySetInnerHTML={{
										__html: card.review as string,
									}}
								></p>
							) : (
								<p className="my-4">No review.</p>
							)}
						</div>

						<div>
							{/* Body -> Right -> Image */}
							<img
								className="mt-4 rounded-2xl mx-auto block"
								src={card.imageUrl}
								alt={card.title}
							/>

							{/* Body -> Right -> Tags */}
							<div className="mt-2 text-center">
								{card.status && (
									<div className={badgeStatus}>
										<span className="font-bold">
											{card.status}
										</span>
									</div>
								)}
							</div>

							<div className="mt-2 text-center">
								{card.tags.map((tag) => (
									<div
										key={tag}
										className="badge badge-outline"
									>
										{tag}
									</div>
								))}
							</div>

							{/* Body -> Right -> Scores */}
							{card.categoryScores && (
								<div className="mt-2">
									<div className="italic">
										<p className="text-center pb-1">
											🌌 Graphics/Art style
										</p>

										<ScoreBar
											sectionName="graphics-artstyle"
											cardName={card.title}
											score={card.categoryScores.graphics}
										/>
									</div>
									<div className="italic mt-1">
										<p className="text-center pb-1">
											📖 Story
										</p>
										<ScoreBar
											sectionName="story"
											cardName={card.title}
											score={card.categoryScores.story}
										/>
									</div>
									<div className="italic mt-1">
										<p className="text-center pb-1">
											🕹️ Gameplay
										</p>
										<ScoreBar
											sectionName="gameplay"
											cardName={card.title}
											score={card.categoryScores.gameplay}
										/>
									</div>
									<div className="italic mt-1">
										<p className="text-center pb-1">
											🎵 Music
										</p>
										<ScoreBar
											sectionName="graphics-artstyle"
											cardName={card.title}
											score={card.categoryScores.music}
										/>
									</div>
									<div className="italic mt-1">
										<p className="text-center pb-1">
											🎭 Fun
										</p>
										<ScoreBar
											sectionName="graphics-artstyle"
											cardName={card.title}
											score={card.categoryScores.fun}
										/>
									</div>

									{card.score !== undefined && (
										<>
											<hr className="mt-3 border border-secondary" />

											<p className="text-2xl text-center font-bold pt-1">
												Overall:{" "}
												<span className="text-accent-content badge-accent rounded-lg px-1">
													{card.score}
												</span>
											</p>
										</>
									)}
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
