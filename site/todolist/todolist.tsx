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

  return <>
    <div>{input}</div>
    {list.ul}
    <div>
      <button onclick={() => list.clearDone()}>Clear done</button>
    </div>
  </>;
}
