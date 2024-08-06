import { Item } from "./item.js";

export class List {

  ul = <ul class='list' /> as HTMLUListElement;
  items: Item[] = [];

  onchange?: () => void;

  add(text: string) {
    const item = new Item(this, text);
    this.items.push(item);
    this.ul.append(item.li);
    this.onchange?.();
    return item;
  }

  rem(item: Item) {
    this.items = this.items.filter(it => it !== item);
    this.onchange?.();
  }

  clearDone() {
    this.doneItems().forEach(it => it.remove());
  }

  invertAll() {
    this.items.forEach(it => it.toggle());
  }

  doneItems() {
    return this.items.filter(it => it.done);
  }

  itemChanged() {
    this.onchange?.();
  }

}
