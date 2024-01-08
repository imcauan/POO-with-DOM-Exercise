
export class Component {
  #element;

  constructor(tag, attributes, parent) {
    this.tag = tag
    this.parent = parent
    this.attributes = attributes
    this.build();
  }

  readValue() {
    return console.log(this.#element.value);
  }

  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.attributes)

    this.readValue(this.#element);
    this.render()    
  }

  render() {
    this.parent = document.querySelector('.elements')
    return this.parent.appendChild(this.#element);
  }

  getElement() {
    return this.#element
  }
}