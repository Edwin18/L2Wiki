import AbstractComponent from './abstract-component.js';

const IMG_SIZE = {
  WIDTH: 32,
  HEIGHT: 32
};

const getItem = (item) => (
  `<div class="item">
    <div class="item__info">
      <img src="${item.url}" alt="${item.name}" width="${IMG_SIZE.WIDTH}" height="${IMG_SIZE.HEIGHT}">
      <div class="item__description">
        <span class="name">${item.name}</span>
        ${item.count ? `<span class="count">${item.count}</span>` : ``}
      </div>
    </div>
    ${item.ingredients ? `<div class="item__ingredients"></div>` : ``}
  </div>`
);

export default class ItemComponent extends AbstractComponent {
  constructor(item) {
    super();
    this._item = item;
  }

  getTemplate() {
    return getItem(this._item);
  }

  setItemClickHandler(handler) {
    this.getElement().querySelector(`img`).addEventListener(`click`, () => {
      handler(this._item);
    });
  }
}
