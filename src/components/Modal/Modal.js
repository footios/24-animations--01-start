import React from 'react';

import './Modal.css';

const modal = (props) => {


    let cssClasses = ['Modal', 'ModalInitial']

    if (props.show) {
        cssClasses.pop()
        cssClasses = ['Modal', 'ModalOpen'] 
    } else if (!props.modalInitial) {
        cssClasses = ['Modal', 'ModalClosed']
    }
	// cssClasses = [ 'Modal', props.show ? 'ModalOpen' : 'ModalClosed' ];


	return (
		<div className={cssClasses.join(' ')}>
			<h1>A Modal</h1>
			<button className='Button' onClick={props.closed}>
				Dismiss
			</button>
		</div>
	);
};

export default modal;
