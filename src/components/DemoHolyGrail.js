import React from 'react'
import LayoutHolyGrail from './layouts/LayoutHolyGrail'

const DemoHolyGrail = () => (
    <LayoutHolyGrail
        content={<div>Content</div>}
        header={<h1>Header</h1>}
        footer={<div>Footer</div>}
        sidebarLeft={<div>Left</div>}
        sidebarRight={<div>Right</div>}
    />
);

export default DemoHolyGrail
