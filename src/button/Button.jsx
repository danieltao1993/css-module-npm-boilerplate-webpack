import React from 'react';
import CSSModules from 'react-css-modules';
import _style from '../../lib/button.css'

let styles = {}
Object.assign(styles, _style)

function Button( props) {

    const { route } = props;

    return (
    	<div styleName='demo'>
    		<button styleName='button blue'>press me</button>
    		<button styleName='button green'>press me</button>
    		<button styleName='button red'>press me</button>
       	</div>
    );
}

export default CSSModules(Button, styles, {allowMultiple: true} )
