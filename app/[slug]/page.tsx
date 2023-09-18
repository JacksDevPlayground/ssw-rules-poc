import { CustomDocumentRenderer } from '../components/keystatic/custom-renderer';
import { reader } from '../reader';

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.rules.read(slug);

  if (!post) return <div>Rule not found!</div>;

  return (
    <div className="border-grey-300 shadow-lg mx-auto grid max-w-prose">
      <div className=' items-center gap-16'>
        <div className="prose dark:prose-invert">
          <h1>{post.title}</h1>
          <div>
            <CustomDocumentRenderer document={await post.content()} />
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
