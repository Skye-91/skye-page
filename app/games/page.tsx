import { games } from "@/data"
import CardHolderWithFilters from "../components/CardHolderWithFilters"
import Navbar from "../components/Navbar"

export default function GamesPage() {
	return (
		<>
			<Navbar location="Games 🎮" />
			<div
				tabIndex={0}
				className="collapse collapse-open border-base-300 bg-warning text-warning-content border my-6"
			>
				<div className="collapse-title text-xl font-medium">
					<span className="bg-neutral p-1 pb-[7px] rounded-2xl">
						⚠️
					</span>{" "}
					The scores and the reviews are a work in progress and are
					subject to changes
				</div>
			</div>
			<CardHolderWithFilters content={games} />
		</>
	)
}
