import { CustomDocumentRenderer } from "@components/keystatic/custom-renderer";
import { CardContent } from "@components/ui/card";
import { reader } from "app/reader";

type RuleCardDataProps = {
	slug: string;
}

const RuleCardData = async ({ slug }: RuleCardDataProps) => {

	const rule = await reader.collections.rules.read(slug);

	if (!rule) return <div>Rule blurb not found!</div>;

	return (
		<CardContent>
			<CustomDocumentRenderer document={await rule.blurb()} />
		</CardContent>
	);
}

export default RuleCardData;