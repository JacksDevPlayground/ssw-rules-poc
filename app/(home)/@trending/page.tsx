import Image from "@components/common/image/image";
import Search from "@components/common/search/search";
import { Card, CardFooter, CardHeader } from "@components/ui/card";

const TrendingPage = () => {
	return (
		<section className="overflow-hidden">
			<section className="flex flex-row overflow-x-auto" >
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
				<Card className="flex flex-col min-w-[250px] min-h-24">
					<CardHeader className="aspect-video">
						<Image src="/images/rules-logo.svg" alt="Logo" className="" />
					</CardHeader>
					<CardFooter>
						Category here
					</CardFooter>
				</Card>
			</section>
			<Search className="pt-4" />
		</section>
	);
}

export default TrendingPage;