class NavBar extends HTMLElement {

    static get observedAttributes(){
        return ["icon", "quienesSomos", "nuestraTec", "metaverso", "metaTu", "tienda", "noticias", "ayuda"]
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
        <link rel="stylesheet" href="./src/components/navBar/navBar.css">
        <div class="container">
            <div class="part1Nav">
            <img class="iconNav" src="https://scontent.fbog10-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=PhBpb-lxxPkAX_UQ1cf&_nc_ht=scontent.fbog10-1.fna&oh=00_AfA7ORRYZn1MuU8c2PItPDp0q1BJ6w7sNkn8VfoVOEKvgw&oe=64FE9C39" alt="">
            <p class="navBar1">Quiénes somos?</p>
            <p class="navBar1">Nuestra tecnologia</p>
            <p class="navBar1">El metaverso</p>
            <p class="navBar1">Meta y tú</p>
            </div>
            <div class="part2Nav">
            <p class="navBar2">Tienda Meta</p>
            <p class="navBar2">Noticias</p>
            <p class="navBar2">Ayuda</p>
            </div>
        </div>
        `
    }
}

customElements.define("nav-bar", NavBar)
export default NavBar