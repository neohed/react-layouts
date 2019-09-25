import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/layout-holy-grail.css'

const LayoutGrid = ({header, sidebar, content}) => (
    <div className="wrapper">
        <div className="box header">{header}</div>
        <div className="box sidebar">{sidebar}</div>
        <div className="box content">{content}</div>
    </div>
);

LayoutGrid.propTypes = {
    header: PropTypes.node.isRequired,
    sidebar: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired
};

export default LayoutGrid;
