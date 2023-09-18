import * as components from "./components/indexHijo.js"

class ContainerNavBar extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <nav-bar></nav-bar>
        <banner-main></banner-main>
        <banner-second></banner-second>
        <banner-video></banner-video>
        <my-card></my-card>
        `
    }
}

customElements.define("web-container", ContainerNavBar)