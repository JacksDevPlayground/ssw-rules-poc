import { CustomDocumentRenderer } from '../../components/keystatic/custom-renderer';
import { reader } from '../../reader';
import Link from 'next/link';
import { Pencil, Github, Bookmark, ArrowRightCircle } from "lucide-react";

enum DisplayState {
    all,
    blurb
}

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const category = await reader.collections.category.read(slug);

    if (!category) return <div>Rule not found!</div>;

    const res = await reader.collections.rules.all();
    const rules = res.filter(rule => category.rules.includes(rule.slug));

    let displayState = DisplayState.blurb;

    return (
        <div className="border-grey-300 shadow-lg mx-auto grid max-w-prose p-5">
            <div className='items-center gap-16'>
                <div className="prose dark:prose-invert">
                    <h1>{category.title}</h1>
                    <div>
                        <ol>
                            {rules.map(async rule =>
                                <li>
                                    <div className="flex flex-row justify-between bg-gray-100 p-2 mb-5">
                                        <span className="font-medium">{rule.entry.title}</span>
                                        <div className="flex gap-3">
                                            <Bookmark className="hover:stroke-red-500" />
                                            <Link href={`/keystatic/branch/main/collection/rules/item/${rule.slug}`}>
                                                <Pencil className="hover:stroke-red-500" />
                                            </Link>
                                            <Link href={`https://github.com/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER}/${process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG}/tree/main/content/rules/${rule.slug}`}>
                                                <Github className="hover:stroke-red-500" />
                                            </Link>
                                        </div>
                                    </div>

                                    <CustomDocumentRenderer document={await rule.entry.blurb()} />
                                    {displayState === DisplayState.all &&
                                        <CustomDocumentRenderer document={await rule.entry.content()} />
                                    }

                                    <Link href={`/${rule.slug}`} className="flex items-center gap-2 w-fit">
                                        <ArrowRightCircle className="fill-red-500 stroke-white" size={25} />
                                        <span className="text-[#cc4141] hover:underline">Read more...</span>
                                    </Link>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const slugs = await reader.collections.rules.list();

    return slugs.map(slug => ({
        slug,
    }));
}
