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
				<Transition in={this.state.showBlock} timeout={1000} mountOnEnter unmountOnExit>
					{(state) => (
						<div
							style={{
								backgroundColor: 'red',
								width: 100,
								height: 100,
								margin: 'auto',
								transition: 'opacity 1s ease-out',
								opacity: state == 'exiting' || state == 'entering' ? 0 : 1
							}}
						/>
					)}
				</Transition>
				{this.state.modalisOpen ? <Modal show={this.state.modalisOpen} closed={this.closeModal} /> : null}
				{this.state.modalisOpen ? <Backdrop show={this.state.modalisOpen} /> : null}
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
