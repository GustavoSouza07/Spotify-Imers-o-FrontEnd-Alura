class component extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:"open"});

    }

    build(){
        const componentRoot = document.createElement("div");
        const linkComponent = document.createElement("a");
        linkComponent.setAttribute("class", "link");

        //appends
        componentRoot.appendChild(linkComponent)
    }
}   


customElements.define("component-divisor", component);