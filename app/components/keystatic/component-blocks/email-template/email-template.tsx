type EmailTemplateProps = {
    to: string;
    cc: string;
    bcc: string;
    subject: string;
    body: any;
};

const EmailTemplate = ({ to, cc, bcc, subject, body }: EmailTemplateProps) => {
    return (
        <div className="bg-white p-8 rounded-md shadow-md max-w-xl mx-auto">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
                    To:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="to"
                    type="text"
                    placeholder="recipient@example.com"
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cc">
                    Cc:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cc"
                    type="text"
                    placeholder="cc@example.com"
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bcc">
                    Bcc:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="bcc"
                    type="text"
                    placeholder="bcc@example.com"
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                    Subject:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                    type="text"
                    placeholder="Your Subject Here"
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                    Body:
                </label>
                <div
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                >
                    {body}
                </div>
            </div>
        </div>
    );
}

export default EmailTemplate;
