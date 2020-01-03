import AbstractComponent from './abstract-component.js';

const getIngredientsItems = (item) => (
  // Тут нужно делать проверку есть ли у итема ингридиенты и запускать класс Контролера по новой только уже с указаным итемом!!!! и скорее всего контейнером
  item.ingredients.map((ingredient) => (
    `<div class="ingredients__item icon" style="background-image: url('${ingredient.item.url}')">
      <span>${ingredient.item.name}</span>
      <span>${ingredient.count}</span>
    </div>`
  ))
  .join(`\n`)
);

const getIngredientsContainer = (item) => (
  `<div class="ingredients">
    ${getIngredientsItems(item)}
  </div>`
);

export default class IngredientsComponent extends AbstractComponent {
  constructor(item) {
    super();
    // this._container = container;
    this._item = item;
  }

  getTemplate() {
    return getIngredientsContainer(this._item);
  }
}
