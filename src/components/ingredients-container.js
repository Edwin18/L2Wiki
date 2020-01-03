import AbstractComponent from './abstract-component.js';

const getIngredientsContainer = () => (
  `<div class="ingredients"></div>`
);

export default class IngredientsContainerComponent extends AbstractComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  getTemplate() {
    return getIngredientsContainer(this._item);
  }
}
