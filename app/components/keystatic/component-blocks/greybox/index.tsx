import { component, fields } from '@keystatic/core';
import Greybox from './greybox';


export const GreyboxComponent = component({
	preview: ({ fields }) => <Greybox content={fields.content.element} figureText={fields.figureText.value} />,
	label: 'Greybox',
	schema: {
		content: fields.child({
			kind: 'block',
			placeholder: 'Greybox content...',
			formatting: 'inherit',
		}),
		figureText: fields.text({ label: 'Figure Text', description: 'This does not add a "Figure:" infrom of the text ' }),
	},
	chromeless: false,
});