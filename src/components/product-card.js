class cardProduct extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open"});
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <section>
                <img>
            </section>
            ${getStyles()};
        `;
        return template;
    }
    getStyles() {
        return `
            <style>

            </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }

}

customElements.define("card-component", cardProduct);