import { Css } from "./components/css.js";

document.getElementById('todo-root')!.replaceChildren(<>
  <Css src="./todolist.css" />
  <fieldset>
    <legend>Todo List</legend>
    <TodoList />
  </fieldset>
</>);

function TodoList() {
  const input = <input autofocus /> as HTMLInputElement;
  const output = <input class='output' /> as HTMLInputElement;

  input.oninput = () => output.value = input.value.toUpperCase();
  return <>
    <p>{input}</p>
    <p>{output}</p>
  </>;
}
