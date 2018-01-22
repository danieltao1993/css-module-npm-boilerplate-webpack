'use strict';

var fancyButtonCss = require('./lib/css/fancyButton.css'); 
var buttonGroupCss = require('./lib/css/buttonGroup.less'); 

var fancyButton = require('./lib/components/fancyButton.jsx'); 
var buttonGroup = require('./lib/components/buttonGroup.jsx'); 


module.exports = {
	fancyButtonCss: fancyButtonCss,
	buttonGroupCss: buttonGroupCss,

	fancyButton: fancyButton,
	buttonGroup: buttonGroup
};

// module.exports = fancyButton;