import React, { useState } from 'react';
import PropTypes from 'prop-types';

Test.propTypes = {
    
};

function Test(props) {
    
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/100/100" alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    );
}

export default Test;