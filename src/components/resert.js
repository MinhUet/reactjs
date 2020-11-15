import React from 'react';
import PropTypes from 'prop-types';

Resert.propTypes = {
    resertFontSizeAndColor: PropTypes.func.isRequired,
};

function Resert(props) {
    const {resertFontSizeAndColor} = props;
    function resert(){
        resertFontSizeAndColor();
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={resert}>Resert</button>
        </div>
    );
}

export default Resert;