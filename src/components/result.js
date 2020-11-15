import React from 'react';
import PropTypes from 'prop-types';

Result.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number.isRequired,
};

function Result(props) {
    const {color, size} = props;
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="content">
                    <p> Noi dung setting: Color: {color} - ForntSize: {size}px</p>
                </div>
            </div>
        </div>
    );
}

export default Result;