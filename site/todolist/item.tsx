import { List } from "./list.js";

export class Item {

  public done = false;
  private checkbox = <input type='checkbox' /> as HTMLInputElement;

  constructor(
    private list: List,
    public text: string,
    public li = (
      <li class='item'>
        {this.checkbox}
        <span onclick={() => this.toggle()}>{text}</span>
        <button class='close' onclick={() => this.remove()}>✕</button>
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
    this.list.itemChanged();
  }

}
