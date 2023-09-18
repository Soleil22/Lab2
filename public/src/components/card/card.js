class Card extends HTMLElement {

    static get observedAttributes(){
        return []
    }

    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css">
        <p class="titleCard">MÁS INFORMACIÓN SOBRE EL METAVERSO</p>
        <div class="containerCard">
            <div class="containerText1">
                <img class="imgCard" src="https://images.hola.com/imagenes/moda/tendencias/20221205222088/metaverso-como-comprar-ropa-digital-nft/1-172-677/metaverso-2-z.jpg" alt="">
                <p class="textCard">¿Qué es el metaverso?</p>
            </div>
            <div class="containerText2">
            <img class="imgCard" src="https://s2.glbimg.com/XxX1YU4siZN_FUUS-fb2vROw8yY=/e.glbimg.com/og/ed/f/original/2022/07/11/imgs-site-3613.jpg" alt="">
            <p class="textCard">Cómo estamos creando el metaverso de forma responsable</p>
        </div>
        </div>
        `
    }
}

customElements.define("my-card", Card)
export default Card