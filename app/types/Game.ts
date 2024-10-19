export type Status =
	| "Completed"
	| "Dropped"
	| "In Progress"
	| "To Play"
	| "On Hold"

export type CategoryScore = {
	graphics: number
	story: number
	gameplay: number
	music: number
	fun: number
}

export type Review = {
	steamReview?: string
	overview: string
	graphics?: string
	performance?: string
	artDirection?: string
	gameplay?: string
	music?: string
	story?: string
}

export type Game = {
	title: string
	score?: number
	status?: Status
	tags: string[]
	imageUrl: string
	review?: Review
	timesCompleted?: number
	categoryScores?: CategoryScore
}
