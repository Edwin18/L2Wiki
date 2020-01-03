import AbstractComponent from './abstract-component.js';

const getListOfOptions = (itemsData) => (
  itemsData.map((item) => (
    `<option value="${item.name}"></option>`
  ))
  .join(`\n`)
);

const getMainInput = (itemsData) => (
  `<div class="main__input">
    <label for="main-input">Что будетe искать?)</label>
    <input type="text" id="main-input" list="item-data" placeholder="Введите интересующий вас предмет.">
    <datalist id="item-data">
      ${getListOfOptions(itemsData)}
    </datalist>
    <button type="button" class="search-btn">Ищем?)</button>
  </div>`
);

export default class MainInputComponent extends AbstractComponent {
  constructor(itemsData) {
    super();
    this._itemsData = itemsData;
  }

  getTemplate() {
    return getMainInput(this._itemsData);
  }
}
