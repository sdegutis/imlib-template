import { List } from "./list.js";

export function TodoList() {
  const list = new List();

  list.add('foo');
  list.add('bar').toggle();
  list.add('qux');

  const input = <input class='next' autofocus /> as HTMLInputElement;
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
    <div class='actions'>
      {numberDone}
      <a href='#' onclick={(e: Event) => { e.preventDefault(); list.clearDone() }}>Clear done</a>
      <a href='#' onclick={(e: Event) => { e.preventDefault(); list.invertAll() }}>Invert all</a>
    </div>
    {list.ul}
  </>;
}
