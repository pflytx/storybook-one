import {html} from 'lit-html';

import './first-comp';
// import { FirstComp } from './first-comp';

export default {
    title: 'Components/First Component',
    parameters: {
        docs: {
            source: {
                code: '<first-comp name="value"></first-comp>',
            },
        },
    },
};

const Template = ({ name }) => html`<first-comp name="${name}"></first-comp>`;
// const Template = ({ name }) => FirstComp;

export const FirstComp = Template.bind({});

FirstComp.args = {
    name: 'a web comp'
};