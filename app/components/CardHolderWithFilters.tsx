"use client"
import { useState } from "react"
import Card from "./Card"
import { Game, Status } from "../types/Game"

interface Props {
	content: Game[]
}

type SortOrder = "asc" | "desc"

export default function CardHolderWithFilters({ content }: Props) {
	const [searchName, setSearchName] = useState<string>("") // Part of the text to search
	const [sortOrder, setSortOrder] = useState<SortOrder>("desc")
	const [selectedStatus, setSelectedStatus] = useState<Status | "">("")
	const [tagInput, setTagInput] = useState<string>("")
	const [tags, setTags] = useState<string[]>([])
	const [tagSuggestions, setTagSuggestions] = useState<string[]>([])
	const [highlightedIndex, setHighlightedIndex] = useState(-1) // -1 is for no selected tip

	/** Sorting games by title in ascending order before applying any filters */
	const sortedByTitle = [...content].sort((a, b) =>
		a.title.localeCompare(b.title)
	)

	// -------- TAG INPUT HANDLING --------
	/** Updates the `tagInput` when the user types in the input for the tags */
	const handleTagInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const inputValue = event.target.value
		setTagInput(inputValue)

		if (inputValue.trim()) {
			const allTags = content.flatMap((game) => game.tags)
			const filteredSuggestions = allTags
				.filter((tag) =>
					tag.toLowerCase().includes(inputValue.toLowerCase())
				) // Filtra i tag simili
				.filter((tag) => !tags.includes(tag))

			setTagSuggestions(Array.from(new Set(filteredSuggestions)))
		} else {
			setTagSuggestions([])
		}
	}

	const handleTagSelect = (selectedTag: string) => {
		setTags((prevTags) => [...prevTags, selectedTag])
		setTagInput("")
		setTagSuggestions([])
	}

	/** Adds the typed tag in the `tags` array when the user presses Enter */
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (tagSuggestions.length > 0) {
			if (event.key === "ArrowDown") {
				// Seleziona il suggerimento successivo
				setHighlightedIndex((prevIndex) =>
					prevIndex < tagSuggestions.length - 1 ? prevIndex + 1 : 0
				)
			} else if (event.key === "ArrowUp") {
				// Seleziona il suggerimento precedente
				setHighlightedIndex((prevIndex) =>
					prevIndex > 0 ? prevIndex - 1 : tagSuggestions.length - 1
				)
			} else if (event.key === "Enter" && highlightedIndex >= 0) {
				// Se l'utente preme Enter ed è selezionato un suggerimento
				handleTagSelect(tagSuggestions[highlightedIndex])
			}
		}
	}

	/** Removes a specific tag from the `tags` array when the user clicks the icon */
	const handleTagRemove = (tagToRemove: string) => {
		setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove))
	}

	// -------- CONTENT FILTERING --------

	/** Array that holds the filtered content based on the selected criteria */
	const filteredContent = sortedByTitle
		// Name filter
		.filter((game) =>
			game.title.toLowerCase().includes(searchName.toLowerCase())
		)
		// Status filter
		.filter((game) =>
			selectedStatus ? game.status === selectedStatus : true
		)
		// Tag filter
		.filter(
			(game) =>
				tags.length === 0 ||
				tags.every((tag) => game.tags.includes(tag))
		)

	// -------- CONTENT SORTING --------

	/** Array that holds the filtered and sorted content based on the score */
	const sortedContent = [...filteredContent].sort((a, b) => {
		if (a.score === undefined) a.score = -1
		if (b.score === undefined) b.score = -1

		const scoreComparison = a.score - b.score
		return sortOrder === "asc" ? scoreComparison : -scoreComparison
	})

	/** Updates the sorting order when the user selects a new one */
	const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSortOrder(event.target.value as SortOrder)
	}

	/** Updates the status when the user selects a new one */
	const handleStatusChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedStatus(event.target.value as Status | "")
	}

	return (
		<div className="flex flex-col md:flex-row ">
			<aside className="w-full md:w-1/4 bg-base-300 p-4 rounded-2xl">
				<h2 className="text-lg font-semibold mb-4">Filters</h2>

				{/* Name Filter */}
				<label htmlFor="nameSearch" className="block mb-2">
					By Name:
				</label>
				<input
					id="nameSearch"
					type="text"
					value={searchName}
					onChange={(e) => setSearchName(e.target.value)}
					className="input input-bordered w-full max-w-xs mb-3"
					placeholder="Enter part of the name..."
				/>

				{/* Score Filter */}
				<label htmlFor="sortSelect" className="block mb-2">
					By Score:
				</label>
				<select
					id="sortSelect"
					onChange={handleSortChange}
					className="select select-bordered w-full max-w-xs mb-3"
				>
					<option value="desc">Descending</option>
					<option value="asc">Ascending</option>
				</select>

				{/* Status Filter */}
				<label htmlFor="statusSelect" className="block mb-2">
					By Status:
				</label>
				<select
					id="statusSelect"
					onChange={handleStatusChange}
					className="select select-bordered w-full max-w-xs mb-3"
				>
					<option value="">All</option>
					<option value="Completed">Completed</option>
					<option value="Dropped">Dropped</option>
					<option value="In Progress">In Progress</option>
					<option value="To Play">To Play</option>
				</select>

				{/* Tag Filter */}
				<label htmlFor="tagInput" className="block mb-2">
					By Tag:
				</label>
				<input
					id="tagInput"
					type="text"
					value={tagInput}
					onChange={handleTagInputChange}
					onKeyDown={handleKeyDown}
					className="input input-bordered w-full max-w-xs mb-3"
					placeholder="Insert a tag and press Enter..."
				/>
				{tagSuggestions.length > 0 && (
					<ul className="z-10 w-full bg-neutral bordered text-neutral-content rounded-md">
						{tagSuggestions.map((suggestion, index) => (
							<li
								key={suggestion}
								className={`p-2 hover:bg-primary hover:text-primary-content cursor-pointer rounded-md ${
									index === highlightedIndex
										? "bg-neutral-500"
										: ""
								}`}
								onClick={() => handleTagSelect(suggestion)}
							>
								{suggestion}
							</li>
						))}
					</ul>
				)}
				<div className="mb-4">
					{tags.map((tag) => (
						<span key={tag} className="badge badge-outline mr-2">
							{tag}
							<button
								className="ml-2 text-red-500"
								onClick={() => handleTagRemove(tag)}
							>
								✖️
							</button>
						</span>
					))}
				</div>
			</aside>

			<div className="w-full md:w-3/4 p-4">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
					{sortedContent.length === 0 ? (
						<p className="text-center">No content found</p>
					) : (
						sortedContent.map((card) => (
							<Card key={card.title} card={card} />
						))
					)}
				</div>
			</div>
		</div>
	)
}
