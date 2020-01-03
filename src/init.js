// Контролеры
import MainController from './controllers/main.js';
// Дата
import {allItems} from './data/items.js';

// Логика рендера
const initContainerElement = document.querySelector(`.main`);

const mainController = new MainController(initContainerElement, allItems);
mainController.render();
mainController.setInputTextHandler();

// const inputTextElement = mainInputComponent.getElement().querySelector(`#main-input`);

// inputTextElement.addEventListener(`input`, () => {
//   for (let i = 0; i < allItems.length; i++) {
//     if (inputTextElement.value === allItems[i].name) {
//       const itemComponent = new ItemComponent(allItems[i]);

//       renderElem(initContainerElement, itemComponent.getElement());
//     }
//   }
// });
