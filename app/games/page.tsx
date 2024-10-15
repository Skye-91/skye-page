import { Game } from "../components/Card"
import CardHolderWithFilters from "../components/CardHolderWithFilters"

const cards: Game[] = [
	{
		title: "Card 1",
		score: 1,
		status: "Completed",
		tags: ["Singleplayer"],
	},
	{
		title: "Card 2",
		score: 2,
		tags: ["Multiplayer"],
	},
	{
		title: "Card 3",
		score: 3,
		tags: ["Singleplayer", "Multiplayer", "Live Service"],
	},
	{
		title: "Card 4",
		score: 4.5,
		status: "Dropped",
		tags: ["Singleplayer"],
	},
	{
		title: "Card 5",
		score: 5,
		tags: ["Live Service", "Multiplayer"],
	},
	{
		title: "Card 6",
		score: 6,
		status: "Dropped",
		tags: ["Multiplayer"],
	},
	{
		title: "Card 7",
		score: 7,
		tags: ["Singleplayer", "Multiplayer", "Live Service"],
	},
	{
		title: "Card 8",
		score: 8,
		status: "In Progress",
		tags: ["Singleplayer"],
	},
	{
		title: "Card 9",
		score: 9,
		tags: ["Live Service", "Singleplayer"],
	},
]

export default function GamesPage() {
	return (
		<>
			<h1 className="mt-2 text-center text-4xl">Games 🎮</h1>

			<CardHolderWithFilters content={cards} />
		</>
	)
}
