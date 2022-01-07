import { createPortal } from "react-dom"

export default class Door{
    #number: number
    #hasPresent: boolean
    #selected: boolean
    #opened: boolean

    constructor(number: number,hasPresent=false, selected=false,opened=false){
        this.#number = number
        this.#hasPresent = hasPresent
        this.#selected = selected
        this.#opened = opened  
    }

    get number(){
        return this.#number
    }
    get hasPresent(){
        return this.#hasPresent
    }
    get selected(){
        return this.#selected
    }
    get opened(){
        return this.#opened
    }
    
    unselected(){
        const selected = false
        return new createPortal(this.number, this.hasPresent, selected, this.opened)
    }
    
    toggleSelection(){
        const selected = !this.selected
        return new Door(this.#number, this.#hasPresent, selected, this.#opened)
    }

    toOpen(){
        const open = true
        return new Door(this.#number, this.#hasPresent, this.selected, open)
    }

}