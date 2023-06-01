class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <nav >
        <img  class="logo" src="../images/logo.png" alt="Site logo">
        <Ul>
         <li><a href="../index">Home</a> </li>
         <li><a href="/pages/about">About</a></li>
         <li><a href="/pages/contact-us">Contact Us</a></li>
         <li><a href="/pages/gallery">Gallery</a></li>
        </Ul> 
     </nav>
        `;
    }
}

customElements.define('header-component', Header);