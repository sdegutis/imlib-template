import MarkdownIt from 'markdown-it';
import { basename } from 'path';
import postFiles from './data/';

const md = new MarkdownIt();

export const posts = postFiles.map(file => {
  // Properly parsing .md frontmatter is out of scope of this demo
  const lines = file.content.toString('utf8').split(/\r?\n/);
  const title = lines.shift()!;
  const content = md.render(lines.join('\n'));
  const slug = basename(file.path);
  const route = `blog/${slug}.html`;
  return { title, content, route, slug };
});
