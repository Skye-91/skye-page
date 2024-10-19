interface Props {
	cardName: string
	sectionName: string
	score: number
}

export default function ScoreBar({ cardName, sectionName, score }: Props) {
	const clampedScore = Math.max(0, Math.min(score, 10))

	const colors = [
		"rounded-l-full bg-red-500",
		"bg-orange-500",
		"bg-yellow-500",
		"bg-lime-500",
		"bg-green-500",
		"bg-teal-500",
		"bg-blue-500",
		"bg-indigo-500",
		"bg-purple-500",
		"rounded-r-full bg-pink-500",
	]

	return (
		<div
			id={"score-" + cardName + sectionName}
			className="flex justify-center"
		>
			{colors.map((color, index) => (
				<div
					key={index}
					className={`p-2 border border-neutral w-1/10 ${
						index < clampedScore
							? color
							: index == 9
							? "rounded-r-full"
							: ""
					}`}
				/>
			))}
		</div>
	)
}
