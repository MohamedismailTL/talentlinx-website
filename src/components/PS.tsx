export default function Example({ ps_section, children }: any) {
	const { headline, text, quote } = ps_section.frontmatter;

	return (
		<div className="bg-gradient-to-br from-brand-aqua-800 to-brand-aqua-900 text-gray-100 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div
					className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-16 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">

					{/* Linker Bereich: Bild mit Zitat */}
					<div className="lg:pr-4 relative rounded-2xl overflow-hidden">
						{/* Bildinhalt */}
						{children}

						{/* Farbverlauf-Overlay */}
						<div
							className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary-900 pointer-events-none rounded-2xl"></div>

						{/* Zitat am unteren Rand */}
						<figure className="absolute bottom-6 left-6 right-6">
							<blockquote className="text-xl font-semibold text-white">
								<p>
									{quote}
								</p>
							</blockquote>
						</figure>
					</div>

					{/* Rechter Bereich: Text */}
					<div>
						<div className="text-base text-gray-300 lg:max-w-lg">
							<h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">
								{headline}
							</h2>
							<div className="max-w-xl">
								<p className="mt-6">
									{text}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
