import { Component } from "./Component.js"
import { Input } from "./Input.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";

const elements = document.querySelector('.elements')

const form = new Form({id: 'formID', className: 'form-content'}, elements)
const title = new Component('h3', {id: 'titleID', textContent: 'Hello World'}, form)
const input = new Input({type: 'text', placeholder: 'Digite seu email', id: 'emailInput'})
const passwordInput = new Input( {type: 'password', placeholder: 'Digite sua senha', id: 'passwordInput'})
const login = new Component('button', {type: 'submit', id: 'loginInput', innerText: 'Login'})

form.attachChild(title, input, passwordInput, login)