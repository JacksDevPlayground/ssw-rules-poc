import { Check, XSquare } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import { match, P } from "ts-pattern";

type GoodBadImageProps = {
	type: string;
	image: string | null;
	figureText: string;
};

const GoodBadImage = ({ type, figureText, image }: GoodBadImageProps) => {
	const Type = useMemo(() => {
		return match(type)
			.with('good', () => <figcaption className="flex"><Check className="stroke-green-500" /><strong>{figureText}</strong></figcaption>)
			.with('bad', () => <figcaption className="flex"><XSquare className="fill-red-500 stroke-white" /><strong>{figureText}</strong></figcaption>)
			.with(P._, () => <div>This is not a known type</div>)
			.exhaustive();
	}, [type]);
	console.log(image)
	let src = image || ""
	//Check if the image has a / at the beginning
	const hasSlash = src?.startsWith('/')
	// if the image doesn't add a / at the beginning
	if (!hasSlash) {
		src = '/' + src
	}

	return (
		<figure className="">
			<Image src={src} alt={figureText || `Image of ${type} example`} width={0} height={0} sizes="100vw" className="w-full h-auto" />
			{Type}
		</figure>
	);
}

export default GoodBadImage;