import MainInputComponent from '../components/main-input.js';
import ItemContainerComponent from '../components/item-container.js';
import ItemController from './item.js';

import {renderElem, removeElem} from '../utils/utils.js';

const Handler = {
  OPEN: 0,
  CLOSE: 1
};

export default class MainController {
  constructor(container, allItems) {
    this._container = container;
    this._allItems = allItems;

    // this._ingredientsContainer = Handler.CLOSE;

    this._mainInputComponent = new MainInputComponent(allItems);
    this._itemContainerComponent = new ItemContainerComponent();

    // this._ingredientsComponent = null;

    // this._setIngredientsClickHandler = this._setIngredientsClickHandler.bind(this);
  }

  render() {
    renderElem(this._container, this._mainInputComponent.getElement());
  }

  setInputTextHandler() {
    const mainInputElement = this._mainInputComponent.getElement().querySelector(`#main-input`);

    mainInputElement.addEventListener(`input`, () => {
      removeElem(this._itemContainerComponent);
      this._ingredientsContainer = Handler.CLOSE;
      for (let i = 0; i < this._allItems.length; i++) {
        if (mainInputElement.value === this._allItems[i].name) {
          const itemContainerElement = this._itemContainerComponent.getElement();
          const itemController = new ItemController(itemContainerElement, this._allItems[i]);
          itemController.render();

          renderElem(this._container, itemContainerElement);
        }
      }
    });
  }

  // _setIngredientsClickHandler(container, item) {
  //   switch (this._ingredientsContainer) {
  //     case Handler.CLOSE:
  //       if (item.ingredients) {
  //         this._ingredientsComponent = new IngredientsComponent(item);
  //         renderElem(container, this._ingredientsComponent.getElement());
  //         this._ingredientsContainer = Handler.OPEN;
  //       }
  //       break;
  //     case Handler.OPEN:
  //       removeElem(this._ingredientsComponent);
  //       this._ingredientsContainer = Handler.CLOSE;
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
