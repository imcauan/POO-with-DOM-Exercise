const elements = document.querySelector(".elements");

class Component {
  #componentRef;

  constructor(element, id, name, type, value, innerText) {
    this.build(element, id, name, type, value, innerText);
  }

  readValue() {
    return console.log(this.value);
  }

  build(element, id, name, type, value, innerText) {
    this.element = element
    this.#componentRef = id;
    this.name = name;
    this.type = type;
    this.value = value ?? 'Oi';
    this.innerText = innerText;

    const createNewElement = document.createElement(element);
    createNewElement.id = this.#componentRef;
    createNewElement.name = this.name;
    createNewElement.type = this.type;
    createNewElement.value = this.value;
    createNewElement.innerText = this.innerText;

    this.readValue(createNewElement);
    this.render(createNewElement)
    
  }

  render(element) {
    return elements.appendChild(element);
  }
}

class Input extends Component {
  constructor(type) {
    super(type);
    this.type = type
  }
}

const newInput = new Component('input', 'inputId', 'inputName', 'text',)

class Label extends Component {}

class Form extends Component {}
