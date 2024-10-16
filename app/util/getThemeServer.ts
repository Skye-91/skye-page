import { cookies } from "next/headers"

const defaultTheme = "dim"

export function getThemeServer() {
	const themeCookie = cookies().get("theme")
	let theme = defaultTheme

	if (themeCookie !== undefined) {
		theme = themeCookie.value
	}

	return theme
}
