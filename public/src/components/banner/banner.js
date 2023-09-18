class Banner extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/banner/banner.css">
        <div class="banner">
        <div class="imgBanner">
            <img class="imgBanner2" src="https://scontent.fbog11-1.fna.fbcdn.net/v/t39.8562-6/354611847_101914846282323_3421284972382882579_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6825c5&_nc_ohc=HFuItqlgMuYAX8AH_T6&_nc_ht=scontent.fbog11-1.fna&oh=00_AfA5EINgqV7Z6l4dotwXHsAcRTjpMirNI2JNwQtcq_L5Zg&oe=64FFC45D" alt="">
        </div>
        <div class="texto">
            <h1 class="tituloBanner">Las formas de conectarse evolucionan, y nuestra empresa también</h1>
            <my-button bgcolor="#0064e0" textcolor="white"></my-button>
        </div>
        </div>

        `
    }
}

customElements.define("banner-main", Banner)
export default Banner