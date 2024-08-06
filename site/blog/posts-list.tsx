import { posts } from './posts.js';

export function PostsList() {
  return <>
    <h2>Blog Posts</h2>
    <ul>
      {posts.map(post => (
        <li>
          <a href={post.route}>
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  </>;
}
