"use client";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@components/ui/card";
import Link from "next/link";
import { Fragment } from "react";

const SidebarPage = () => {
	return (
		<section className="col-span-12 md:col-span-5 xl:col-span-3">
			<Card>
				<CardHeader>
					<CardTitle>
						Need Help?
					</CardTitle>
				</CardHeader>
				<CardContent>
					SSW Consulting has over 30 years of experience developing awesome software solutions.
				</CardContent>
				<CardFooter className="flex justify-center w-full">
					<Button className="w-full">
						Book a free initial meeting
					</Button>
				</CardFooter>
			</Card>
			<div className="flex flex-row justify-evenly  pt-4">
				<Link href="/" className="underline">Ophaned rules</Link>
				<Link href="/" className="underline">Archived rules</Link>
			</div>
		</section>
	);
}

export default SidebarPage;