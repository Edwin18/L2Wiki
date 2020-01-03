export const createElem = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

export const removeElem = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export const clearElem = (component) => {
  component.innerHTML = ``;
};

export const renderElem = (container, element) => {
  container.append(element);
};
