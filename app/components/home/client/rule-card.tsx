import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { Suspense, useMemo } from "react";
import RuleCardData from "@components/home/server/rule-card-data";
import { MessageCircleIcon, ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import Link from "next/link";


type RuleCardProps = {
	title: string
	slug: string;
	lastUpdated: string;
	categories: string[];
}

// TODO: Move to utils 
const formatRelativeTime = (date: string) => {
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
	const minute = 60;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30; // Approximation
	const year = day * 365; // Approximation

	const rtf = new Intl.RelativeTimeFormat('en', { style: 'long' });

	if (diffInSeconds < minute) {
		return rtf.format(-diffInSeconds, 'second');
	} else if (diffInSeconds < hour) {
		return rtf.format(-Math.floor(diffInSeconds / minute), 'minute');
	} else if (diffInSeconds < day) {
		return rtf.format(-Math.floor(diffInSeconds / hour), 'hour');
	} else if (diffInSeconds < week) {
		return rtf.format(-Math.floor(diffInSeconds / day), 'day');
	} else if (diffInSeconds < month) {
		return rtf.format(-Math.floor(diffInSeconds / week), 'week');
	} else if (diffInSeconds < year) {
		return rtf.format(-Math.floor(diffInSeconds / month), 'month');
	} else {
		return rtf.format(-Math.floor(diffInSeconds / year), 'year');
	}
};

// TODO: Move this out to a new compontent
// TODO: Fix this styling 
// TODO: Use a group and highlight Icons when hovering over the button
// TODO: Get rid of background on hover of button
type RuleCardActionProps = {
	onClick?: () => void;
	className?: string;
	icon: any;
}
const RuleCardAction = ({ icon: Icon, onClick, className }: RuleCardActionProps) => (
	<Button variant="ghost" size="icon" className={cn("hover:bg-none", className)} onClick={onClick}>
		<Icon className="hover:fill-primary hover:stroke-primary" />
	</Button>
)

const RuleCard = async ({ slug, title, lastUpdated, categories }: RuleCardProps) => {
	const time = useMemo(() => formatRelativeTime(lastUpdated), [lastUpdated]);
	return (
		<Link href={`/${slug}`}>
			<Card>
				<CardHeader>
					<CardTitle className="flex justify-between">
						{title}
						{/* TODO:  Move this to a client rendered component */}
						<div className="flex gap-4">
							<RuleCardAction icon={ThumbsUpIcon} />
							<RuleCardAction icon={ThumbsDownIcon} />
							<RuleCardAction icon={MessageCircleIcon} />
						</div>
					</CardTitle>
					<CardDescription className="flex pt-2 gap-2 items-center">
						<>
							{categories.map((category) =>
							(
								<div className="text-primary text-xs not-italic font-semibold leading-[normal] border border-primary flex justify-center items-center gap-2.5 px-2 py-1 rounded-sm border-solid max-w-fit">
									{category}
								</div>
							))}
						</>
						{time}
					</CardDescription>
				</CardHeader>
				<Suspense fallback={"loading..."}>
					<RuleCardData slug={slug} />
				</Suspense>
			</Card>
		</Link>
	);
}

export default RuleCard;