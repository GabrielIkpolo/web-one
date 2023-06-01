class Footer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
        <div class="footer-content">
            &copy; Gabiii
        </div>
        </div>
        `;
    }
}

customElements.define('footer-component', Footer);