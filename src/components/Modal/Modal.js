import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import './Modal.css';

// it seams like it's not really needed,
// since you can adjust this with css animation
const animationTiming = {
	enter: 400,
	exit: 1000
};

/* 
Sometimes you just want to have a couple of predefined css classes f
or the different animation states
and you want to make sure they get attached 
depending on the state of the animation. 

The css-transition component will automatically cycle through a couple
of css classes and merge them to the div here, 
depending on the state of the css transition or of the transition
in general. The classes it cycle through are your trunk,
so fade-slide in our case and then -enter 
which is attached right at the point of time it starts
entering, enter-active ....
so it's our job to now add these various classes to our application*/
const modal = (props) => {
	return (
		<CSSTransition mountOnEnter unmountOnExit in={props.show} timeout={animationTiming}
		classNames='fade-slide'>
			<div className='Modal'>
				<h1>A Modal</h1>
				<button className="Button" onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
