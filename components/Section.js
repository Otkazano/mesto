export default class Section {
  constructor({items, renderer}, selector) {
    this._initialArray = items;
    this._renderer = renderer; 
    this._selector = selector;
    this._container = this._getContainer();
  }

  _getContainer() {
    return document.querySelector(this._selector);
  }

  setItem(element) {
    this._container.prepend(element); 
  }

  renderItems() {
    this._initialArray.forEach(item => {
      this._renderer(item);
    });
  }
}