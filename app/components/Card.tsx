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
			badgeStatus += " badge-primary"
			break
		case "To Play":
			badgeStatus += " badge-info"
			break
		case "On Hold":
			badgeStatus += " badge-secondary"
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
					<h3 className="font-bold text-3xl text-primary">
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

					{card.review && card.review.steamReview && (
						<a
							className="underline italic"
							href={card.review.steamReview}
						>
							Steam Review
						</a>
					)}

					<hr className="mt-1 border border-primary" />

					{/* Body */}
					<div
						id={"container-modal-" + card.title}
						className="grid grid-cols-1 lg:grid-cols-[4fr,1fr] gap-4"
					>
						{/* Body -> Right -> Image, Tags, Scores */}
						<div className="order-1 lg:order-2">
							{/* Image */}
							<img
								className="mt-4 rounded-2xl mx-auto block"
								src={card.imageUrl}
								alt={card.title}
							/>

							{/* Tags */}
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

							{/* Scores */}
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
												<span className="badge-primary text-primary-content rounded-lg px-1">
													{card.score}
												</span>
											</p>
										</>
									)}
								</div>
							)}
						</div>

						{/* Body -> Left -> Review */}
						<div className="order-2 lg:order-1">
							{card.review ? (
								<>
									<ReviewComponent
										section="Overview"
										review={card.review.overview}
									/>
									<hr className="border border-base-content" />
								</>
							) : (
								<p className="my-4">No review.</p>
							)}

							{card.review && card.review.graphics && (
								<>
									<ReviewComponent
										section="Graphics"
										review={card.review.graphics}
									/>
									<hr className="border border-base-content" />
								</>
							)}

							{card.review && card.review.performance && (
								<>
									<ReviewComponent
										section="Performance"
										review={card.review.performance}
									/>
									<hr className="border border-base-content" />
								</>
							)}

							{card.review && card.review.artDirection && (
								<>
									<ReviewComponent
										section="Art Direction"
										review={card.review.artDirection}
									/>
									<hr className="border border-base-content" />
								</>
							)}

							{card.review && card.review.gameplay && (
								<>
									<ReviewComponent
										section="Gameplay"
										review={card.review.gameplay}
									/>
									<hr className="border border-base-content" />
								</>
							)}

							{card.review && card.review.music && (
								<>
									<ReviewComponent
										section="Music"
										review={card.review.music}
									/>
									<hr className="border border-base-content" />
								</>
							)}

							{card.review && card.review.story && (
								<ReviewComponent
									section="Story"
									review={card.review.story}
								/>
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

interface ReviewProps {
	section: string
	review: string
}

function ReviewComponent({ section, review }: ReviewProps) {
	return (
		<>
			<h3 className="text-xl font-bold mt-3 text-primary">{section}</h3>
			<p
				className="my-4"
				dangerouslySetInnerHTML={{
					__html: review as string,
				}}
			></p>
		</>
	)
}
