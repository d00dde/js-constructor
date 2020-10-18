import { row, col, normalizeOptions } from './utils';

const title = (block) => {
  const { tag = 'h1', styles = '' } = normalizeOptions(block);
  return row(col(`<${tag}>${block.value}</${tag}>`), styles);
};

const text = (block) => {
  const { tag = 'p', styles = '' } = normalizeOptions(block);
  return row(col(`<p>${block.value}</p>`), styles);
};

const columns = (block) => {
  const { styles = '' } = normalizeOptions(block);
  const content = block.value.map(col).join('');
  return row(content, styles);
};

const image = (block) => {
  const { styles = '' } = normalizeOptions(block);
  return row(`<img src="${block.value}"/>`, styles);
};

export const templates = { title, text, columns, image };
