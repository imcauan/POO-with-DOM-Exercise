import { Component } from "./Component.js";

export class Label extends Component {
  constructor(labelFor, parent, attributes) {
    super('label', parent, {...attributes, labelFor})
  }
}