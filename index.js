const elements = document.querySelector(".elements");

class Component {
  #componentRef;

  constructor(id, name, type, value, innerText) {
    this.build(id, name, type, value, innerText);
  }

  readValue() {
    console.log(this.value);
  }

  build(id, name, type, value, innerText) {
    this.#componentRef = id;
    this.name = name;
    this.type = type;
    this.value = value;
    this.innerText = innerText;

    const createNewBtn = document.createElement("button");
    createNewBtn.id = this.#componentRef;
    createNewBtn.name = this.name;
    createNewBtn.type = this.type;
    createNewBtn.value = this.value;
    createNewBtn.innerText = this.innerText;
    elements.appendChild(createNewBtn);

    this.readValue(createNewBtn);
  }

  render() {}
}

const createBtn = new Component("btnId", "btnName", "Submit", "MyValue", "Oi");

class Input extends Component {}

class Label extends Component {}

class Form extends Component {}
