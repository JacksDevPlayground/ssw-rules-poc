import RuleCard from "@components/home/client/rule-card";
import { reader } from "app/reader";
import { Suspense, useMemo } from "react";

const RulesCardPage = async () => {
	const allRules = await reader.collections.rules.all()
	const categories = await reader.collections.category.all()



	return (
		<Suspense fallback={<>Loading...</>}>
			{allRules?.map((rule) => (
				<RuleCard title={rule.entry.title} slug={rule.slug} lastUpdated={rule.entry.lastUpdated} categories={['Communication']} />
			))}
		</Suspense>
	);
}

export default RulesCardPage;