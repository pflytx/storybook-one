import {html} from 'lit-html';

import './first-comp';

export default {
    title: 'Components/First Component',
};

const Template = ({ name }) => html`<first-comp name="the simple example"></first-comp>`;

export const FirstComp = Template.bind({});

// FirstComp.args = {
//     name: 'a web comp'
// };