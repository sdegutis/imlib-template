import { Css } from "./components/css.js";
import { Html } from "./components/html.js";
import { TodoList } from "./todolist/placeholder.js";

export default (
  <Html title="Hello world">
    <div id='site-root'>
      <Css src="./index.css" />
      <div>
        <h1>Hello world!</h1>
        <p>This app runs on <a href='https://github.com/sdegutis/imlib'>imlib</a>.</p>
        <p>Clone <a href='https://github.com/sdegutis/imlib-template'>this template repo</a>.</p>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  </Html>
);
