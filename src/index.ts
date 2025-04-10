import _ from 'lodash';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';

function component() {
  const element = document.createElement('div');

// Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());