import { model } from './model';
import { App } from './classes/App';
import './styles/main.css';
// import { templates } from './templates';

new App(model).init();

// model.forEach((block) => {
//   const toHTML = templates[block.type];
//   if (toHTML) {
//     $site.insertAdjacentHTML('beforeend', toHTML(block));
//   }
// });
