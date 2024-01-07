const elements = document.querySelector(".elements");
class Component {
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
}

class Input extends Component {
  constructor(type) {
    super(type);
    this.type = type
  }
}

class Label extends Component {
  constructor(labelFor, parent, attributes) {
    super('label', parent, {...attributes, labelFor})
  }
}
class Form extends Component {
  constructor(attributes) {
    super('form', attributes, elements)
}
  attach(element) {
    this.element = element
  }
}

const form = new Form({id: 'meuID', name: 'meuName'})
const btn = new Component('button', {innerText: 'Enviar', id: 'sendDataBtn'})
const component = new Component('input', {id: 'myInput', placeholder: 'Digite seu login'})
