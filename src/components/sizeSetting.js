import React, { useState } from 'react';
import PropTypes from 'prop-types';

SizeSetting.propTypes = {
    fontSizeDefault: PropTypes.number.isRequired,
    color: PropTypes.string,
    changeSize: PropTypes.func.isRequired,
};

function SizeSetting(props) {
    const {fontSizeDefault, changeSize, color} = props;

    function changeFontSize(param){
        var result = fontSizeDefault + param > 4 && fontSizeDefault + param < 30 ? fontSizeDefault + param : fontSizeDefault;
        console.log(result, color);
        changeSize(result);
    }

    return (
        <div>
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title" style={{fontSize: fontSizeDefault, color: color}}>Size: {fontSizeDefault} px</h3>
                </div>
                <div className="panel-body">
                    <button type="button" className="btn btn-success" onClick={()=>changeFontSize(-2)}> Giam</button>
                    <button type="button" className="btn btn-success" onClick={()=>changeFontSize(+2)}> Tang</button>
                </div>
            </div>
        </div>
    );
}

export default SizeSetting;