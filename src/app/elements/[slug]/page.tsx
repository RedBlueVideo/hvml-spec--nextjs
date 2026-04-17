import { getArticleMetadata } from "@/util/metadata";
import dynamic from "next/dynamic";

export type ElementPageProps = {
  params: Promise<{
    slug: string,
    metadata: Record<string, string>,
  }>,
};

/**
 * TODO: Make generic across page types - use multiple dynamic route parts
 * e.g. `[category]/[slug]`
 */
export default async function ElementPage(props: ElementPageProps) {
  const { slug } = await props.params;
  const metadata = await getArticleMetadata('elements', slug);
  const importPath = `@/_articles/elements/${slug}.md`;
  const Content = dynamic(() => import(importPath));

  /**
   * TODO: Ordinal suffixes not supported with native `toLocaleDateString` method
   */
  const formattedDate = (new Date(metadata.date)).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );

  const title = metadata.title.replaceAll(
    /<code>([^<>]+)<\/code>/g,
    '<code class="language-text">$1</code>',
  );
  // title = title.replaceAll(/<p>([^<>]+)<\/p>/g, '$1');

  // console.log({title})

  return (
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <p>Last updated: <time dateTime={metadata.date}>{formattedDate}</time></p>
      <Content />
    </article>
  );
};