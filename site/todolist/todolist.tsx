import { List } from "./list.js";

export function TodoList() {
  const list = new List();

  list.add('foo');
  list.add('bar').toggle();
  list.add('qux');

  const input = <input class='next' autofocus /> as HTMLInputElement;
  input.onkeydown = (e) => {
    if (e.key === 'Enter' && input.value.trim().length > 0) {
      list.add(input.value);
      input.value = '';
    }
  };

  return <>
    <div>{input}</div>
    <div class='actions'>
      <Counter list={list} />
      <ActionButton onclick={() => list.clearDone()}>Clear done</ActionButton>
      <ActionButton onclick={() => list.invertAll()}><i>Invert</i> all</ActionButton>
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

function ActionButton(attrs: { onclick: () => void }, children: any) {
  return <a
    href='#'
    style='text-decoration:none'
    onclick={(e: Event) => {
      e.preventDefault();
      attrs.onclick();
    }}
  >{children}</a>;
}
