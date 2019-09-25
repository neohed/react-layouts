import React from 'react'
import Modal from './modal/Modal'
import LayoutGrid from './layouts/LayoutGrid'

const DemoModal = () => {
    const modalContent = (
        <LayoutGrid
            header={<h4>Header</h4>}
            sidebar={<div>Sidebar</div>}
            content={<div>a tempus lorem. Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a
                ante
                maximus, sollicitudin nisi ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac
                maximus urna tempus. Mauris non libero posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.</div>}
        />
    );
    const modalProps = {
        ariaLabel: 'A label describing the Modal\'s current content',
        triggerText: 'This is a button to trigger the Modal'
    };

    return (
        <LayoutGrid
            header={<h1>Modal Example</h1>}
            sidebar={
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            }
            content={
                <main className="content">
                    <p>Nunc semper eu lectus ac blandit. <Modal {...modalProps}>{modalContent}</Modal> Fusce iaculis dolor sit amet felis placerat, non auctor nibh
                        pellentesque. Nunc dignissim, tortor eget sollicitudin pulvinar, sem est sagittis nisi, non condimentum orci felis vel libero. Aenean a
                        tempus
                        lorem. Proin a enim id magna malesuada consectetur mattis eget massa. Sed volutpat neque vitae tortor dignissim dapibus. Ut a ante maximus,
                        sollicitudin nisi ut, varius magna. Vestibulum maximus urna eget commodo egestas. Donec sollicitudin tortor ac mauris pulvinar, ac maximus
                        urna
                        tempus. Mauris non libero posuere, ullamcorper neque vel, tempor sem. Suspendisse potenti. In tristique et metus id laoreet.</p>
                </main>}
        />
    );
};

export default DemoModal;
