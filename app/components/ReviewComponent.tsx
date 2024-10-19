"use client"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface ReviewProps {
	section: string
	review: string
}

export default function ReviewComponent({ section, review }: ReviewProps) {
	return (
		<>
			<h3 className="text-xl font-bold mt-3 text-primary">{section}</h3>
			<Markdown remarkPlugins={[remarkGfm]} className="my-4">
				{review}
			</Markdown>

			{/* <p
				className="my-4"
				dangerouslySetInnerHTML={{
					// __html: html,
					__html: review as string,
				}}
			></p> */}
		</>
	)
}
