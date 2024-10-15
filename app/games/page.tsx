import { games } from "@/data"
import CardHolderWithFilters from "../components/CardHolderWithFilters"

export default function GamesPage() {
	return (
		<>
			<h1 className="mt-2 text-center text-4xl">Games 🎮</h1>

			<CardHolderWithFilters content={games} />
		</>
	)
}
