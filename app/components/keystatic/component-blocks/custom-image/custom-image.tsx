import Image from "@components/common/image/image";
import { useMemo } from "react";
import { P, match } from "ts-pattern";

type CustomImageProps = {
	type: string;
	image: string | null;
};

const CustomImage = ({ type, image }: CustomImageProps) => {

	let src = image || ""
	//Check if the image has a / at the beginning
	const hasSlash = src?.startsWith('/')
	// if the image doesn't add a / at the beginning
	if (!hasSlash) {
		src = '/' + src
	}

	const CustomImg = useMemo(() => {
		return match(type)
			.with('small', () => <Image src={src} alt={src} />)
			.with('medium', () => <Image src={src} alt={src} />)
			.with('large', () => <Image src={src} alt={src} />)
			.with('noborder', () => <Image src={src} alt={src} />)
			.with(P._, () => <Image src={src} alt={src} />)
			.exhaustive();
	}, [type]);

	return (
		<div>
			{CustomImg}
		</div>
	);
}

export default CustomImage;