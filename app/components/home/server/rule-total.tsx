import { useMemo } from "react";

type RuleTotalProps = {
	total: number;
}

const RuleTotal = ({ total }: RuleTotalProps) => {
	const rulesCount = useMemo(() => new Intl.NumberFormat('au-AU').format(total), [total]);

	return (
		<div className="flex items-center gap-1.5 self-stretch pb-0">
			<span className="text-[#CC4141] text-lg not-italic font-semibold leading-[normal]">{rulesCount}</span>
			<span className="text-[#333] text-lg not-italic font-normal leading-[normal]">secret ingredients to quality software</span>
		</div>
	);
}

export default RuleTotal;