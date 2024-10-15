import type { Config } from "tailwindcss"
import daisyui from "daisyui"

export const daisyuiThemes = [
	"synthwave",
	"retro",
	"valentine",
	"cyberpunk",
	"aqua",
	"dim",
	"coffee",
]

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: daisyuiThemes,
	},
}
export default config
