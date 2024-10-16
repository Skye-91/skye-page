import { games } from "@/data"
import CardHolderWithFilters from "../components/CardHolderWithFilters"

export default function GamesPage() {
	return (
		<>
			<h1 className="mt-2 text-center text-4xl">Games 🎮</h1>

			<div
				tabIndex={0}
				className="collapse collapse-open border-base-300 bg-warning text-warning-content border"
			>
				<div className="collapse-title text-xl font-medium">
					<span className="bg-neutral p-1 pb-[7px] rounded-2xl">
						⚠️
					</span>{" "}
					The scores are a work in progress and are subject to changes
				</div>
			</div>
			<CardHolderWithFilters content={games} />
		</>
	)
}
