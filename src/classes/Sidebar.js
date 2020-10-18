import { createForm } from './../utils';
import { TextBlock, TitleBlock } from './blocks';

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$root = document.querySelector(selector);
    this.update = updateCallback;
    this.addBlock = this.addBlock.bind(this);
    this.init();
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.template);
    this.$root.addEventListener('submit', this.addBlock);
  }
  get template() {
    return [
      createForm('title'),
      createForm('text'),
      createForm('columns'),
      createForm('image'),
    ].join('');
  }
  addBlock(e) {
    e.preventDefault();
    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    const newBlock =
      type === 'text'
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles });
    this.update(newBlock);
  }
}
