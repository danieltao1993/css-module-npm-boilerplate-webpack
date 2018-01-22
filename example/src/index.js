import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/Demo';
import Test from './components/Test';
import BG from './components/BG';

function App(props) {
    return (
        <div>
            <Demo />
            <hr/>
            <Test />
            <hr/>
            <BG />
            <hr/>
        </div>        
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));
