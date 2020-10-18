import { Site } from './Site';
import { Sidebar } from './Sidebar';

export class App {
  constructor(model) {
    this.model = model;
  }
  init() {
    const site = new Site('#site');
    site.render(this.model);

    new Sidebar('#panel', (newBlock) => {
      this.model.push(newBlock);
      site.render(this.model);
    });
  }
}
