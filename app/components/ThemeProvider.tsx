"use client"
import { useEffect } from "react"
import { themeChange } from "theme-change"

export default function ThemeProvider() {
	useEffect(() => {
		themeChange(false)
	}, [])

	return <></>
}
