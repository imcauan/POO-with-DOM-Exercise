import { Component } from "./Component.js";

export class Form extends Component {
  constructor(attributes) {
    super('form', attributes)
}

  attachChild(...children) {
    children.forEach(child => {
     this.getElement().append(child.getElement())  
    })
  }
}
