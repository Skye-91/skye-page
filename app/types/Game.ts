export type Status = "Completed" | "Dropped" | "In Progress" | "To Play"

export type CategoryScore = {
	graphics: number
	story: number
	gameplay: number
	music: number
	fun: number
}

export type Game = {
	title: string
	score?: number
	status?: Status
	tags: string[]
	imageUrl: string
	review?: string
	timesCompleted?: number
	categoryScores?: CategoryScore
}
