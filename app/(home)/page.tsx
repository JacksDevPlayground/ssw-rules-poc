import RulesFilter from "@components/home/client/rules-filter";
import RuleTotal from "@components/home/server/rule-total";
import { reader } from "app/reader";


const MainPage = async () => {
	const getRules = async () => reader.collections.rules.list();

	return (
		<section className='flex justify-between'>
			<RuleTotal total={(await getRules()).length} />
			<RulesFilter />
		</section>
	);
}

export default MainPage;