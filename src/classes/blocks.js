import { row, col, normalizeOptions } from './../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }
  toHTML() {
    throw new Error(
      `Method toHTML should be implemented in ${this.constructor.name}`
    );
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = 'h1', styles = '' } = normalizeOptions(this.options);
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = 'p', styles = '' } = normalizeOptions(this.options);
    return row(col(`<${tag}>${this.value}</${tag}>`), styles);
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles = '' } = normalizeOptions(this.options);
    const content = this.value.map(col).join('');
    return row(content, styles);
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles = '' } = normalizeOptions(this.options);
    return row(`<img src="${this.value}"/>`, styles);
  }
}
