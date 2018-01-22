import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/Demo';
import Test from './components/Test';

function App(props) {
    return (
        <main>
            <Demo />
            <hr/>
            <Test />
        </main>        
    );
}


ReactDOM.render(
	React.createElement(App), 
	document.getElementById('root'));
