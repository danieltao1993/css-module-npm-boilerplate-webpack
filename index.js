'use strict';

var buttonCss = require('./lib/css/Button.css'); 
var buttonGroupCss = require('./lib/css/buttonGroup.css'); 

// var Button = require('./lib/components/Button.jsx'); 
// var ButtonGroup = require('./lib/components/ButtonGroup.jsx'); 
import Button from './src/button/Button.jsx';
import ButtonGroup from './src/buttonGroup/ButtonGroup.jsx';

// var Button = require('./src/button/Button.jsx'); 
// var ButtonGroup = require('./src/buttonGroup/ButtonGroup.jsx'); 

module.exports = {
	buttonCss: buttonCss,
	buttonGroupCss: buttonGroupCss,

	Button: Button,
	ButtonGroup: ButtonGroup
};

// module.exports = Button;