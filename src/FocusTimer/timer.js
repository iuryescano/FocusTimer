import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kichenTimer } from './sounds.js'

export function countdown() {

    clearTimeout(state.countdownId)
    
    if(!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0) {
        seconds = 59
        minutes--
    }

    if(minutes < 0) {
        reset()
        kichenTimer.play()
        return
    }


    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => countdown(), 1000) /* Uma funcao chamando ela mesma... cuidado com o looping nesses casos... precisa ser recursivo*/

}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes /* nullish coalesing operator */
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0") /* Esta preenchendo os 2 numeros atras para ficar visualmente melhor*/
    el.seconds.textContent = String(seconds).padStart(2, "0")
}
