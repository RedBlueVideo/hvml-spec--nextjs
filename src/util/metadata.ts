import { readFileSync } from "fs";
import path from 'path'
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type ArticleType =
  | 'elements'
  | 'glossary'
  | 'rationale'
  | 'root'
;

export interface ArticleMetadata {
  title: string;
  date: string;
}

export async function getArticleMetadata(articleType: ArticleType, slug: string): Promise<ArticleMetadata> {
  const filePath = path.join(
    process.cwd(),
    `src/_articles/${articleType === 'root' ? '' : `${articleType}/`}${slug}.md`,
  );
  const fileContent = readFileSync(filePath, 'utf-8');
  const { data: metadata } = matter(fileContent);

  const processedTitle = await remark()
    .use(html)
    .process(metadata.title)
  ;
  const title = processedTitle.toString();

  return {
    title,
    date: metadata.date,
  };
}