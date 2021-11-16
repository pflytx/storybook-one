import { LitElement, css, html } from 'lit';

export class FirstComp extends LitElement {
    static properties = {
        name: {},
    };
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        //declartive props
        this.name = "";

    }
    render() {
        return html`
	    <h2>We are going to render: ${this.name}, end</h2>
	    `;
    }
}


FirstComp.styles = css`
	* {
		box-sizing: border-box;
	}
	:host {
        color:blue;
        font-family: Arial, Helvetica, sans-serif
    }
`;

window.customElements.define("first-comp", FirstComp);