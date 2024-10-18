import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ThemeProvider from "./components/ThemeProvider"

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
	console.log("test")
	return (
		<html lang="en">
			<ThemeProvider />
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
