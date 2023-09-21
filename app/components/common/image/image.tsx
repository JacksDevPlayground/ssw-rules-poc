import { cn } from '@lib/utils';
import NextImage from 'next/image';
type ImageProps = {
	src: string;
	alt: string;
	className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => <NextImage src={src} alt={alt} width={0} height={0} sizes="100vw" className={cn("w-full h-auto", className)} />

export default Image;