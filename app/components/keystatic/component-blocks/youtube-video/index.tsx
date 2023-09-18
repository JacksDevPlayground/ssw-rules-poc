import { component, fields } from '@keystatic/core';
import YouTubeVideo from './youtube-video';


export const YoutubeVideoComponent = component({
	preview: ({ fields }) => <YouTubeVideo videoId={fields.videoId.value} figureText={fields.figureText.value} />,
	label: 'YouTube video',
	schema: {
		videoId: fields.text({ label: 'Video ID' }),
		figureText: fields.text({ label: 'Figure Text' }),
	},
	chromeless: false,
});