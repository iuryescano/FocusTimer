import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js";
import state from './state.js'


export function registerControls(){
    controls.addEventListener('click', (event ) => {
        const action = event.target.dataset.action
        if(typeof actions[action]() != "function") {
            return
        }

        actions[action]()
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => { /*esse evento esta limpando o dado de entrada para o contador */
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) /*Essa logica para nao aceitar outros caracteres sem ser numeros*/

    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent /* pegando o texto que esta eem minutos*/
        time = time > 60 ? 60 : time /* time e maior que 60 ? se sim mantem como 60... os : siginica nao... e se nao e maior q 60... deixa o time */

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}