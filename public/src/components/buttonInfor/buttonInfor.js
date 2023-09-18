class ButtonInfo extends HTMLElement {

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    static get observedAttributes (){
        return["bgcolor", "textcolor"]
    }

    connectedCallback(){
        this.mount()
    }

    mount(){
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue){
        this[propName]=newValue
        this.mount()
    }

    render(){
        this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./src/components/buttonInfor/buttonInfor.css">
        <div>
        <style>
        .btnBanner{
            background-color: ${this.bgcolor};
            color: ${this.textcolor};
        }
        </style>
        <button class="btnBanner">Más información</button>
        </div>
        `
    }

}

customElements.define("my-button", ButtonInfo)
export default ButtonInfo