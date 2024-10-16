import { getCookie } from "cookies-next"

const defaultTheme = "dim"

export function getThemeClient() {
	const themeCookie = getCookie("theme")
	let theme = defaultTheme

	if (themeCookie !== undefined) {
		theme = themeCookie
	}

	return theme
}
