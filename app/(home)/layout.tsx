import Footer from "@components/layout/footer";
import Header from "@components/layout/header";
import '../styles.css';

export default function RootLayout({
	children,
	accordion,
	rulecards,
	trending,
	sidebar
}: {
	children: React.ReactNode;
	sidebar: React.ReactNode;
	accordion: React.ReactNode;
	rulecards: React.ReactNode;
	trending: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div className="flex-1">
					<div className="border-b-2">
						<Header />
					</div>
					<main className="p-4 flex flex-col md:max-w-4xl lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto py-4 min-h-screen">
						<article className='grid grid-cols-12 gap-6 py-6'>
							<section className='grid gap-4 col-span-12 md:col-span-7 xl:col-span-9'>
								{trending}
								{children}
							</section>
							<aside className='col-span-12 md:col-span-5 xl:col-span-3'>
								{accordion}
								{sidebar}
							</aside>
						</article>
						{rulecards}
					</main>
				</div>
				<Footer />
			</body>
		</html>
	);
}
