import ItemComponent from '../components/item.js';

import {renderElem, clearElem} from '../utils/utils.js';

const Handler = {
  OPEN: 0,
  CLOSE: 1
};

export default class ItemController {
  constructor(container, item) {
    this._container = container;
    this._item = item;

    if (this._item.ingredients) {
      console.log(this._item.ingredients);
    }

    this._itemComponent = new ItemComponent(this._item);
    this._ingredientsContainer = Handler.CLOSE;

    this._getIngredients = this._getIngredients.bind(this);
  }

  render() {
    const itemComponentElement = this._itemComponent.getElement();

    if (this._item.ingredients) {
      this._itemComponent.setItemClickHandler(this._getIngredients);
      this._itemComponent.getElement().querySelector(`img`).classList.add(`pointer`);
    }

    renderElem(this._container, itemComponentElement);
  }

  _getIngredients(item) {
    const itemIngredientsElement = this._itemComponent.getElement().querySelector(`.item__ingredients`);
    switch (this._ingredientsContainer) {
      case Handler.CLOSE:
        item.ingredients.forEach((ingredient) => {
          const ingredientController = new ItemController(itemIngredientsElement, ingredient.item);
          ingredientController.render();

          this._ingredientsContainer = Handler.OPEN;
        });
        break;
      case Handler.OPEN:
        clearElem(itemIngredientsElement);
        this._ingredientsContainer = Handler.CLOSE;
        break;
      default:
        break;
    }
  }
}
