import { Css } from "../components/css.js";
import { TodoList } from "./todolist.js";

const css = <Css src="./todolist/todolist.css" /> as HTMLLinkElement;
css.onload = () => {
  document.getElementById('todo-root')!.replaceChildren(<>
    <h2>Todo List</h2>
    <TodoList />
  </>);
};
document.head.append(css);
