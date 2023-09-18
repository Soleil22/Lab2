class BannerDos extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/bannerDos/bannerDos.css">
        <div class="banner">
        <img class="iconBanner" src="https://scontent.fbog10-1.fna.fbcdn.net/v/t39.8562-6/252294889_575082167077436_6034106545912333281_n.svg/meta-logo-primary_standardsize.svg?_nc_cat=1&ccb=1-7&_nc_sid=ad8a9d&_nc_ohc=PhBpb-lxxPkAX_UQ1cf&_nc_ht=scontent.fbog10-1.fna&oh=00_AfA7ORRYZn1MuU8c2PItPDp0q1BJ6w7sNkn8VfoVOEKvgw&oe=64FE9C39" alt="">
        <h1 class="textBan" >Meta desarrolla tecnologías que ayudan a las personas a conectarse, encontrar comunidades y hacer crecer sus negocios.</h1>
        </div>
        `
    }
}

customElements.define("banner-second", BannerDos)
export default BannerDos