import React from 'react';
import ReactDOM from 'react-dom';
// import Demo from './components/Demo';
import Test from './components/Test';
// import {Button} from '../../index.js';
import {Button} from '../../lib/components/bundle.js';
// import Button from '../../lib/components/Button.js';
// import Button from '../../src/buttonGroup/Button.jsx';
console.log('Button',Button,require('../../lib/components/bundle.js'))
function App(props) {
    return (
        <div>
            {/* <Demo /> */}
            <hr/>
            {/* <Test /> */}
            <hr/>
            <Button />
            <hr/>
        </div>        
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));
