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

  return <>
    <div>{input}</div>
    <div class='actions'>
      <Counter list={list} />
      <a href='#' onclick={(e: Event) => { e.preventDefault(); list.clearDone() }}>Clear done</a>
      <a href='#' onclick={(e: Event) => { e.preventDefault(); list.invertAll() }}>Invert all</a>
    </div>
    {list.ul}
  </>;
}

function Counter({ list }: { list: List }) {
  const span = <span /> as HTMLSpanElement;

  const updateText = () => {
    span.textContent = `Done: ${list.doneItems().length}`;
  };

  updateText();
  list.onchange = updateText;

  return span;
}
