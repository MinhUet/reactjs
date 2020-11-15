import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorPicker.propTypes = {
    colorDefault : PropTypes.string,
    changeColor: PropTypes.func,
};

ColorPicker.colorDefault={
    colorDefault : '',
    changeColor: null,
}
function ColorPicker(props) {
    const {colorDefault, changeColor} = props;
    const [color, setColor] = useState(['red', 'blue', 'green', 'yellow']);
    
    function onclickColorPicker(value){
        console.log(value, colorDefault);
        changeColor(value);
    };
    return (
        <div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <h3 className="panel panel-title">Color Picker</h3>
                </div>
                <div className="panel pany-body" style={{display: 'flex'}}>
                    {
                        color.map((value, key) =>{
                            if(value === colorDefault){
                                return <span key={key}
                                    style={{backgroundColor: value, width: 50, height: 50, display: 'block', margin: '0 10px', border: '3px solid gray'}}
                                    onClick={()=>onclickColorPicker(value)}
                                ></span>
                            }
                            return <span key={key}
                                    style={{backgroundColor: value, width: 50, height: 50, display: 'block', margin: '0 10px'}}
                                    onClick={()=>onclickColorPicker(value)}
                                ></span>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;