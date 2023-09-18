import { component, fields } from '@keystatic/core';
import GoodBad from './good-bad';

export const GoodBadComponent = component({
	preview: ({ fields }) => <GoodBad type={fields.type.value} content={fields.content.element} figureText={fields.figureText?.value} />,
	label: 'Good Bad',
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
		content: fields.child({
			kind: 'block',
			placeholder: 'Goodbad...',
			formatting: 'inherit',
		}),
		figureText: fields.text({ label: 'Figure Text', description: 'This does not add a "Figure:" infrom of the text ' }),
	},
	chromeless: false,
});