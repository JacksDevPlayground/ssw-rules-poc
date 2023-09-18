import { component, fields } from '@keystatic/core';
import EmailTemplate from './email-template';

export const EmailTemplateComponent = component({
	preview: ({ fields }) => <EmailTemplate to={fields.to.value} cc={fields.cc.value} bcc={fields.bcc.value} subject={fields.subject.value} body={fields.body.element} />,
	label: 'Email Template',
	schema: {
		to: fields.text({ label: 'To', description: 'To' }),
		cc: fields.text({ label: 'Cc', description: 'CC' }),
		bcc: fields.text({ label: 'Bcc', description: 'BCC' }),
		subject: fields.text({ label: 'Subject', description: 'Subject' }),
		body: fields.child({
			kind: 'block',
			placeholder: 'Email body...',
			formatting: 'inherit',
		}),
	},
	chromeless: false,
});