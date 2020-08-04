import _ from 'lodash';

const app = require('./js/dom');

app();
let divinfo = document.createElement('div');
divinfo.innerHTML = _.join(['info', 'deluxe'], '');
document.body.appendChild(divinfo);