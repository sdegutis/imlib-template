import MarkdownIt from 'markdown-it';
import { basename } from 'path';
import postFiles from './data/';

const md = new MarkdownIt();

export const posts = postFiles.map(file => {
  const rawContent = file.content.toString('utf8');
  const lines = rawContent.split(/\r?\n/);
  const title = lines.shift()!;
  const content = md.render(lines.join('\n'));
  const slug = basename(file.path);
  const route = `blog/${slug}.html`;
  return { title, content, route, slug };
});
