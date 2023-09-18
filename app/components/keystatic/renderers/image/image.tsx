import NextImage from "next/image"

export function Image({
	src,
	alt,
	title
}: {
	src: string;
	alt: string;
	title?: string | undefined;
}) {
	//Check if the image has a / at the beginning
	const hasSlash = src.startsWith('/')
	// if the image doesn't add a / at the beginning
	if (!hasSlash) {
		src = '/' + src
	}
	return (
		<NextImage src={src} alt={alt} width={0} height={0} sizes="100vw" className="w-full h-auto" />
	)
}