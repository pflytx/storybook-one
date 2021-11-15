import {html} from 'lit-html';

import './second-comp';

export default {
    title: 'Components/Second Component',
};

const Template = ({ name }) => html`<second-comp name="name prop"></second-comp>`;

export const SecondComp = Template.bind({});

// FirstComp.args = {
//     name: 'a web comp'
// };