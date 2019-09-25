import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/layout-form-grid.css'

const LayoutFormGrid = ({children}) => (
    <div>
        {children}
    </div>
);

LayoutFormGrid.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutFormGrid;
