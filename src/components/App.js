import React from 'react';
import PropTypes from 'prop-types'

const App = props => (
    <div id="app">
        {props.children}
    </div>
);

App.propTypes = {
    children: PropTypes.element.isRequired
};

export default App;
