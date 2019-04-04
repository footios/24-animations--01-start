import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
	state = {
		modalisOpen: false,
		showBlock: false
	};

	showModal = () => {
		this.setState({ modalisOpen: true });
	};

	closeModal = () => {
		this.setState({ modalisOpen: false });
	};
	render() {
		return (
			<div className="App">
				<h1>React Animations</h1>
				<button
					className="Button"
					onClick={() => this.setState((prevState) => ({ showBlock: !prevState.showBlock }))}
					style={{
						margin: 20
					}}
				>
					Toggle
				</button>
				<br />
				{/* Wrap with Transition component what we want to animate 
        `in` determines if the div is visible. 
        Transition `state` is toggled via the `in` prop
        `timeout` determines (in milsec) the time between the transitions: 
          'entering'
          'entered'
          'exiting'
          'exited'
		  */}
		  {/* 
		sometimes you want to execute certain code 
		when the state of the animation finishes and not just
		change what you render to the screen,
		for that you get various callbacks, 
		you can add functions you can execute to a transition,
		We get six different events.
		This can be nice to create
		staggered animations where you want to wait 
		for one animation to finish before you start the next one.*/}
				<Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit
				onEnter={() => console.log('onEnter')}
				onEntering={() => console.log('onEntering')}
				onEntered={() => console.log('onEntered')}
				onExit={() => console.log('onExit')}
				onExiting={() => console.log('onExiting')}
				onExited={() => console.log('onExited')}
				 >
					{(state) => (
						<div
							style={{
								backgroundColor: 'red',
								width: 100,
								height: 100,
								margin: 'auto',
								transition: 'opacity 1s ease-out',
								opacity: state === 'exiting' || state === 'entering' ? 0 : 1
							}}
						/>
					)}
				</Transition>
				<Modal show={this.state.modalisOpen} closed={this.closeModal} />
				{this.state.modalisOpen ? <Backdrop show /> : null}
				<button
					style={{
						margin: 20
					}}
					className="Button"
					onClick={this.showModal}
				>
					Open Modal
				</button>
				<h3>Animating Lists</h3>
				<List />
			</div>
		);
	}
}

export default App;
