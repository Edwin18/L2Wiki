import AbstractComponent from './abstract-component.js';

const getItemContainer = () => (
  `<div class="item-container"></div>`
);

export default class ItemContainerComponent extends AbstractComponent {
  getTemplate() {
    return getItemContainer();
  }
}
