const elements = document.querySelector('.elements')

class Component {
  #componentRef = null


  constructor() {
  }
  
  readValue(value) {
    const btnValue = this.value = value
  }

  build(id, name, type, btnValue){
    this.#componentRef = id
    this.name = name
    this.type = type
    this.value = btnValue

    const createBtn = document.createElement('button')
    createBtn.id = this.#componentRef
    createBtn.name = this.name
    createBtn.type = this.type
    createBtn.value = this.value
    createBtn.innerText = `Testando`
    
  } 
  
  render(createBtn) {
    elements.appendChild(createBtn)
  }
}

const addBtn = new Component()
addBtn.build('btnId', 'btnName', 'Submit', 'Testando')
addBtn.render()

class Input extends Component {}

class Label extends Component {}

class Form extends Component {}