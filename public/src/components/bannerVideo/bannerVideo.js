class BannerVideo extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/bannerVideo/bannerVideo.css">
        <div class="containerVideo">
            <video autoplay loop class="video" src="https://video.fpei2-1.fna.fbcdn.net/v/t39.25447-2/355027155_954751942401902_6651272176214797769_n.mp4?_nc_cat=105&vs=87daa3e29d1c6ba5&_nc_vs=HBksFQAYJEdOTklLUlZ1SDJDQ1YyUURBTW50dU9mTkVFNWNibWRqQUFBRhUAAsgBABUAGCRHTWxCU3hJTlhmMlZCendDQUNMc0FFVlhJVWh6YnY0R0FBQUYVAgLIAQBLB4gScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AHXVzZV9sYW5jem9zX2Zvcl92cW1fdXBzY2FsaW5nABFkaXNhYmxlX3Bvc3RfcHZxcwAVACUAHIwXQAAAAAAAAAAREQAAACampaLw1s76ExUCKAJDMxgLdnRzX3ByZXZpZXccF0Aq3jU%2FfO2RGClkYXNoX2k0bGl0ZWJhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50AjE1EW9lbV9pc19leHBlcmltZW50AAxvZW1fdmlkZW9faWQPNTM3MDUzODg0ODkzMjUyEm9lbV92aWRlb19hc3NldF9pZBAxMjEzNzIzNDE2MTE2ODEyFW9lbV92aWRlb19yZXNvdXJjZV9pZBA1NjE3NjU3MDg0OTIyMTk1HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPODA1MTAzOTgwOTA2MzUzDnZ0c19yZXF1ZXN0X2lkACUCHAAlvgEbB4gBcwQ5MTU2AmNkCjIwMjItMDktMTQDcmNiATADYXBwBVZpZGVvAmN0CFVOTElTVEVEE29yaWdpbmFsX2R1cmF0aW9uX3MGMTMuNTA0AnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-7&_nc_sid=413ca4&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ohc=Wm92tKLM0_cAX8VeXM5&_nc_ht=video.fpei2-1.fna&oh=00_AfBXnSuSWtOMDNEODRRkECGLezwZ_o6OxQzs7qnEBdJYXg&oe=6500174C&_nc_rid=163730805812971"></video>
            <div class="containerTextoVideo">
            <h1 class="tituloVideo">El futuro de la conexión digital</h1>
            <p class="textVideo">Estamos trascendiendo las pantallas 2D e incursionando en experiencias envolventes en el metaverso para dar forma a la próxima evolución de la tecnología social.</p>
            <my-button bgcolor="white" textcolor="black" class="btnVideo"></my-button>
            </div>
        </div>
        `
    }
}

customElements.define("banner-video", BannerVideo)
export default BannerVideo