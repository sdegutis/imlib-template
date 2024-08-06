import { Css } from "./components/css.js";
import { TodoList } from "./todolist/todolist.js";

document.getElementById('todo-root')!.replaceChildren(<>
  <Css src="./todolist.css" />
  <h2>Todo List</h2>
  <TodoList />
</>);
