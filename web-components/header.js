class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
            :host {
                color: white;
                padding: 0 20px;
                background-color: #016147;
                height: 7vh;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
            }
            .logo {
                all: unset;
                font-size: 2rem;
                cursor: pointer;
                color: white;
            }
            nav {
                display: flex;
                gap: 10px;
            }
            nav a {
                all: unset;
                cursor: pointer;
                padding: 5px;
                color: white;
                text-decoration: none;
                font-size: 1rem;
                border-bottom: 2px solid transparent;
                transition: border-bottom 0.3s;
            }
            nav a:hover {
                border-bottom: 2px solid white;
            }
        </style>
        <a href="/" class="logo" aria-label="Homepage">
            CASEF-TOGO
        </a>
        <nav>
            <a href="/index.html" class="Acceuil" aria-label="Acceuil">Acceuil</a>
            <a href="/html/projets.html" class="projets" aria-label="Nos projets">Nos projets</a>
            <a href="/html/indemnites.html" class="indemnites" aria-label="Nos indemnités">Nos indemnités</a>
            <a href="/html/actualites.html" class="actualites" aria-label="Les actualités">Les actualités</a>
            <a href="/html/contact.html" class="contacts" aria-label="Nous contacter">Nous contacter</a>
        </nav>
        `;
    }
}

customElements.define('wc-header', Header);
