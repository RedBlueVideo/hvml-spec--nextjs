import { getArticleMetadata } from "@/util/metadata";
import dynamic from "next/dynamic";

export type ElementPageProps = {
  params: Promise<{
    slug: string,
    metadata: Record<string, string>,
  }>,
};

export default async function ElementPage(props: ElementPageProps) {
  const { slug } = await props.params;
  const metadata = await getArticleMetadata('elements', slug);
  const importPath = `@/_articles/elements/${slug}.md`;
  const Content = dynamic(() => import(importPath));

  /**
   * Ordinal suffixes not supported with native `toLocaleDateString` method
   */
  const formattedDate = (new Date(metadata.date)).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: metadata.title }} />
      <p>Last updated: <time dateTime={metadata.date}>{formattedDate}</time></p>
      <Content />
    </article>
  );
};