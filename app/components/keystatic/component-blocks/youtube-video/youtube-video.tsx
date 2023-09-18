"use client";
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

type YouTubeVideoProps = {
	videoId: string;
	figureText?: string;
};
//? NOTE: Investigate if this is the best way to load in YT vids? 
export default function YouTubeVideo({ videoId, figureText }: YouTubeVideoProps) {
	return (
		<figure className="my-8 aspect-video w-full">
			<LiteYouTubeEmbed id={videoId} poster="maxresdefault" title={''} />
			<strong>{figureText}</strong>
		</figure>
	)
}