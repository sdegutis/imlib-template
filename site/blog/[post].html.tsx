import { Css } from '../components/css.js';
import { Html } from '../components/html.js';
import { posts } from './model.js';
import { PostsList } from './posts-list.js';

export default posts.map(post => {
  return [post.slug, <Html title={post.title}>
    <div id='site-root'>
      <div>
        <PostsList />
      </div>
      <div>
        <Css src="../index.css" />
        <h3>{post.title}</h3>
        {post.content}
      </div>
    </div>
  </Html>];
});
