"use client";

import { CustomDocumentRenderer } from "@components/keystatic/custom-renderer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import { useMemo } from "react";

type RuleCardProps = {
	title: string
	slug: string;
	lastUpdated: Date;
	blurb: any;
	categories: string[];
}

// TODO: Move to utils 
const formatRelativeTime = (date: Date) => {
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
	const minute = 60;
	const hour = minute * 60;
	const day = hour * 24;
	const week = day * 7;
	const month = day * 30; // Approximation
	const year = day * 365; // Approximation

	const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' });

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

const RuleCard = ({ slug, title, lastUpdated, blurb, categories }: RuleCardProps) => {
	const time = useMemo(() => formatRelativeTime(lastUpdated), [lastUpdated]);
	return (
		<Card onClick={() => console.log(slug)}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>
					{time}
				</CardDescription>
			</CardHeader>
			<CardContent>
				{/* <CustomDocumentRenderer document={blurb} /> */}
			</CardContent>
			<CardFooter>
				{categories}
			</CardFooter>
		</Card>
	);
}

export default RuleCard;