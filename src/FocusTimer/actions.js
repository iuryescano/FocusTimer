import state from './state.js'
import * as timer from './timer.js'
import * as el from "./elements.js"
import * as sounds from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running') /* Acao de trocar o estado para o tempo correr*/

    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running') /* Acao de trocar o estado para o tempo parar de correr*/
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle /* Acao de trocar o estado do botao de musica*/
    ('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}