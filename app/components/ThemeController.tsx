"use client"

import { daisyuiThemes } from "@/tailwind.config"
import { useEffect, useState } from "react"
// import { getCookie, setCookie } from "cookies-next"

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

export default function ThemeController() {
	const [currentTheme, setCurrentTheme] = useState<string>("dim")

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme")
		if (savedTheme) setCurrentTheme(savedTheme)
	}, [])

	return (
		<div className="dropdown">
			<div tabIndex={0} role="button" className="btn m-1">
				Theme
				<svg
					width="12px"
					height="12px"
					className="inline-block h-2 w-2 fill-current opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
				>
					<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className="dropdown-content bg-base-300 rounded-box z-20 w-52 p-2 shadow-2xl right-0"
			>
				{daisyuiThemes.map((theme) => (
					<li key={theme}>
						<input
							type="radio"
							name="theme-dropdown"
							className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
							aria-label={capitalize(theme)}
							value={theme}
							data-set-theme={theme}
							checked={currentTheme === theme}
							onChange={() => {
								setCurrentTheme(theme)
								// setCookie("theme", theme, { maxAge: 604800 })
								// console.log(
								// 	"Setted cookie:",
								// 	getCookie("theme")
								// )
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
