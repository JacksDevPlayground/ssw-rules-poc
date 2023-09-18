import { component, fields } from '@keystatic/core';
import GoodBadImage from './good-bad-image';

export const GoodBadImageComponent = component({
	preview: ({ fields }) => <GoodBadImage type={fields.type.value} image={fields.image.value?.filename || null} figureText={fields.figureText?.value} />,
	label: 'Image - Good Bad',
	schema: {
		type: fields.select({
			label: 'Type',
			description: 'Good or Bad figure',
			options: [
				{ label: 'Good', value: 'good' },
				{ label: 'Bad', value: 'bad' },
			],
			defaultValue: 'good',
		}),
		image: fields.image({
			label: 'Image',
			description: 'Image to display',
		}),
		figureText: fields.text({ label: 'Figure Text', description: 'This does not add a "Figure:" infrom of the text ' }),
	},
	chromeless: false,
});