import { Css } from "./components/css.js";

class Item {

  public done = false;
  private checkbox = <input type='checkbox' /> as HTMLInputElement;

  constructor(
    private list: List,
    public text: string,
    public li = (
      <li class='item'>
        {this.checkbox}
        <span onclick={() => this.toggle()}>{text}</span>
        <button class='close' onclick={() => this.remove()}>✖</button>
      </li> as HTMLLIElement
    ),
  ) {
    this.checkbox.onclick = () => this.toggle();
  }

  remove() {
    this.li.remove();
    this.list.rem(this);
  }

  toggle() {
    this.done = !this.done;
    this.li.classList.toggle('done', this.done);
    this.checkbox.checked = this.done;
  }

}

class List {

  ul = <ul /> as HTMLUListElement;
  #items = new Set<Item>();

  add(text: string) {
    const item = new Item(this, text);
    this.#items.add(item);
    this.ul.append(item.li);
    return item;
  }

  rem(item: Item) {
    this.#items.delete(item);
  }

  clearDone() {
    console.log('uhh')
    for (const item of this.#items) {
      if (item.done) {
        item.remove();
      }
    }
  }

}

function TodoList() {
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

document.getElementById('todo-root')!.replaceChildren(<>
  <Css src="./todolist.css" />
  <h2>Todo List</h2>
  <TodoList />
</>);
