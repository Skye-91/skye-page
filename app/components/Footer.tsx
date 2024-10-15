export default function Footer() {
	return (
		<footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
			<nav className="grid grid-flow-col gap-4">
				<a
					href="https://x.com/Sky_9911"
					className="link link-hover underline"
				>
					Twitter
				</a>
				<a
					href="https://skye-page.neocities.org/"
					className="link link-hover underline"
				>
					Neocities Page
				</a>
			</nav>
			<p>
				Images provided by{" "}
				<a
					className="link link-hover text-primary"
					href="https://howlongtobeat.com"
				>
					HowLongToBeat
				</a>{" "}
			</p>
			<aside>
				<p>
					Created with{" "}
					<a
						className="link link-hover text-primary font-bold"
						href="https://react.dev/"
					>
						React
					</a>
					,{" "}
					<a
						className="link link-hover text-accent font-bold"
						href="https://nextjs.org/"
					>
						NextJS
					</a>{" "}
					and{" "}
					<a
						className="link link-hover text-secondary font-bold"
						href="https://daisyui.com"
					>
						DaisyUI
					</a>
				</p>
			</aside>
		</footer>
	)
}
