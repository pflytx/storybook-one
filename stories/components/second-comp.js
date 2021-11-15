import { LitElement, css, html } from 'lit';

export class SecondComp extends LitElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        //declartive props
        this.name = "Web Component";

    }
    render() {
        return html`
	    <h2>We are going to render: ${this.name} +end</h2>
	    `;
    }
}

SecondComp.properties = {
   name:{}
};

SecondComp.styles = css`
	* {
		box-sizing: border-box;
	}
	:host {
        color:grey;
        font-family: Arial, Helvetica, sans-serif
    }
`;

window.customElements.define("second-comp", SecondComp);