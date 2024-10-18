"use client"

import { getCookies } from "cookies-next"
import { useLayoutEffect, useState } from "react"

interface Props {
	children: React.ReactNode
}

export default function Wrapper({ children }: Props) {
	const [theme, setTheme] = useState("dim")

	useLayoutEffect(() => {
		const cookies = getCookies()
		console.log("Cookies:", cookies)
		const storage = cookies.theme
		console.log("Cookie:", storage)
		if (storage) setTheme(storage)
	}, [])

	console.log(theme)

	return (
		<html lang="en" data-theme={theme}>
			{children}
		</html>
	)
}
