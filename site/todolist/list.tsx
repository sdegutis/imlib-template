import { Item } from "./item.js";

export class List {

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
