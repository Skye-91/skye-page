import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { cookies } from "next/headers"

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
})

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
})

export const metadata: Metadata = {
	title: "Skye Page",
	description: "Skye Page",
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const themeCookie = cookies().get("theme")
	let theme = "dim"

	if (themeCookie !== undefined) {
		theme = themeCookie.value
	}

	return (
		<html lang="en" data-theme={theme}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<main className="flex-grow">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
