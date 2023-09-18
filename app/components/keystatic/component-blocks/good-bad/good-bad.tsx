import { useMemo } from "react";
import { match, P } from 'ts-pattern';
import { Check, XSquare } from "lucide-react";

type GoodBadProps = {
	type: string;
	figureText?: string;
	content: any;
};

const GoodBad = ({ type, content, figureText }: GoodBadProps) => {

	// Type is either 'good' or 'bad' create a selector to 
	const Type = useMemo(() => {
		return match(type)
			.with('good', () => <figcaption className="flex"><Check className="stroke-green-500" /><strong>{figureText}</strong></figcaption>)
			.with('bad', () => <figcaption className="flex"><XSquare className="fill-red-500 stroke-white" /><strong>{figureText}</strong></figcaption>)
			.with(P._, () => <div>This is not a known type</div>)
			.exhaustive();
	}, [type]);

	return (
		<figure className="">
			<div className="">{content}</div>
			{Type}
		</figure>
	);
}

export default GoodBad;