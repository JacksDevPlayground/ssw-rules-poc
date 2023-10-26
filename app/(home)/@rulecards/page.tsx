import RuleCard from "@components/home/server/rule-card";
import { reader } from "app/reader";
import { Suspense } from "react";

const RulesCardPage = async () => {
	//! HACK:  Hacky way to do pagination -> Save slice indexes to querystring
	const allRules = (await reader.collections.rules.all()).slice(0, 10);
	// TODO: Move categories inside of the rule card. 
	// const categories = await reader.collections.category.all()
	// const allRules = [];

	// TODO: Get categories  
	return (
		<Suspense fallback={<>Loading...</>}>
			{allRules?.map((rule, idx) => (
				<RuleCard key={idx} title={rule.entry.title} slug={rule.slug} lastUpdated={rule.entry.lastUpdated} categories={['Communication']} />
			))}
		</Suspense>
	);
}

export default RulesCardPage;