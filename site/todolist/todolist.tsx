import { List } from "./list.js";

export function TodoList() {
  const list = new List();

  list.add('foo');
  list.add('bar').toggle();
  list.add('qix');

  const input = <input autofocus /> as HTMLInputElement;
  input.onkeydown = (e) => {
    if (e.key === 'Enter') {
      list.add(input.value)
      input.value = '';
    }
  };

  const numberDone = <span /> as HTMLSpanElement;
  const updateNubmerDone = () => {
    numberDone.textContent = `Done: ${list.doneItems().length}`;
  };

  updateNubmerDone();
  list.onchange = updateNubmerDone;

  return <>
    <div>{input}</div>
    {list.ul}
    <div>
      {numberDone}
      <button onclick={() => list.clearDone()}>Clear done</button>
    </div>
  </>;
}
