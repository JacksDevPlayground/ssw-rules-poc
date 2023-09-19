import { BadgeInfo, XSquare } from "lucide-react";
import { useMemo } from "react";
import { match, P } from "ts-pattern";

type AsideProps = {
	figureText?: string;
	type: string;
	content: any;
};

const Aside = ({ figureText, type, content }: AsideProps) => {
	const Type = useMemo(() => {
		return match(type)
			.with('info', () => <figcaption className="flex"><BadgeInfo className="stroke-red-500" /><strong className="text-md">{figureText}</strong></figcaption>)
			.with('warning', () => <figcaption className="flex"><XSquare className="fill-red-500 stroke-white" /><strong className="text-md">{figureText}</strong></figcaption>)
			.with('china', () => <figcaption className="flex"><XSquare className="fill-red-500 stroke-white" /><strong className="text-md">{figureText}</strong></figcaption>)
			.with('codeauditor', () => <figcaption className="flex"><XSquare className="fill-red-500 stroke-white" /><strong className="text-md">{figureText}</strong></figcaption>)
			.with('todo', () => <figcaption className="flex"><XSquare className="fill-red-500 stroke-white" /><strong className="text-md">{figureText}</strong></figcaption>)
			.with(P._, () => <div>This is not a known type</div>)
			.exhaustive();
	}, [type]);

	return (
		<div className="border border-grey-300 p-5">
			<div className="flex items-center">
				{Type}
			</div>
			<div>{content}</div>
		</div>
	);
}

export default Aside;
