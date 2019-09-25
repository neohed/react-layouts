import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/layout-holy-grail.css'

const LayoutHolyGrail = ({header, sidebarLeft, sidebarRight, content, footer}) => (
    <div className="wrapper">
        <div className="box header">{header}</div>
        <div className="box sidebar">{sidebarLeft}</div>
        <div className="box sidebar2">{sidebarRight}</div>
        <div className="box content">{content}</div>
        <div className="box footer">{footer}</div>
    </div>
);

LayoutHolyGrail.propTypes = {
    header: PropTypes.node.isRequired,
    sidebarLeft: PropTypes.node.isRequired,
    sidebarRight: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired
};

export default LayoutHolyGrail;
