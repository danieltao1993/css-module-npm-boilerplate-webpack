import React from 'react';
import CSSModules from 'react-css-modules';
import uncontrollable from 'uncontrollable'

let styles = {}
import _style from '../../lib/css/buttonGroup.css'
// import _style from '../../lib/css/buttonGroup.css'
// import _style from './index.less'

Object.assign(styles, _style)
console.log('ButtonGroup',_style);
class ButtonGroup extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            activeKey: this.props.activeKey || 0
        };
    }

    componentDidMount() {

    }

    onClick(index, item) {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(index);
            let fn = this.props.onClick;
            fn && fn(index, item);
        } else {
            this.setState({
                activeKey: index
            });
        }
    }

    render() {
        let self = this
        let listTypes = this.props.data;
        let radios = [];
        if (listTypes) {
            radios = listTypes.map((item, key) => {
                for (let i in item) {
                    var styleName = 'radio';
                    // console.log(i);
                    if (i == this.props.activeKey) {
                        styleName += ' active';
                    }
                    return (<div key={key}
                        // style={this.props.buttonStyle || { color: 'white' }}
                        styleName={styleName}
                        value={item.value}
                        onClick={self.onClick.bind(this, i, item)}
                    >
                        {item[i]}
                    </div >);
                }
            });
        }
        return (
            <div
                styleName="button_group"
                style={this.props.groupStyle || { color: 'white' }}
            >
                {radios}
            </div>
        );
    }

}

ButtonGroup.defaultProps = {
    data: [{ 0: '实时拥堵' }, { 1: '十一预测' }, { 2: '十一以来' }],
    activeKey: 0,
};
// export default ButtonGroup;
export default CSSModules(ButtonGroup, styles, {allowMultiple: true} )

// export default uncontrollable(
//     CSSModules(ButtonGroup, styles, { allowMultiple: true }),
//     {
//         activeKey: 'onChange'
//     });
