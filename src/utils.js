export const row = (content, styles = '') => {
  return `
		<div class="row" style="${styles}">
			${content}
		</div>
	`;
};
export const col = (content) => {
  return `
		<div class="col-sm">
			${content}
		</div>
	`;
};

const css = (styles = {}) => {
  const toString = (key) => `${key}: ${styles[key]};`;
  return Object.keys(styles).map(toString).join('');
};

export const normalizeOptions = (options) => {
  if (!options) {
    return {};
  }
  if (typeof options.styles === 'object') {
    return {
      styles: css(options.styles),
      tag: options.tag,
    };
  }
  return options;
};

export function createForm(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}
