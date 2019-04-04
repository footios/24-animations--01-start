import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

import './List.css';

class List extends Component {
	state = {
		items: [ 1, 2, 3 ]
	};

	addItemHandler = () => {
		this.setState((prevState) => {
			return {
				items: prevState.items.concat(prevState.items.length + 1)
			};
		});
	};

	removeItemHandler = (selIndex) => {
		this.setState((prevState) => {
			return {
				items: prevState.items.filter((item, index) => index !== selIndex)
			};
		});
	};

	render() {
		const listItems = this.state.items.map((item, index) => (
			<CSSTransition key={index} classNames='fade' timeout={300} >
				<li className="ListItem" onClick={() => this.removeItemHandler(index)}>
					{item}
				</li>
			</CSSTransition>
		));

		return (
			<div>
				<button className="Button" onClick={this.addItemHandler}>
					Add Item
				</button>
				<p>Click Item to Remove.</p>
				<ul className="List">
					{/*  by default TransitionGroup would render a div in its place.
                    So we can define the component property... 
                    
                    The special thing about transition group 
                    and essentially the only thing it does is it's able to handle
                    multiple items,
                    it determines whenever one element in the list changes 
                    if it's removed or added and it will then manually
                    set the in property on the wrapped transition
                    or CSSTransition component so that 
                    you don't have to control the `in` property 
                    because you of course can't do that, because of the list is dynamic*/}
					<TransitionGroup component="ul" className="List" timeout={300} >
						{listItems}
					</TransitionGroup>
				</ul>
			</div>
		);
	}
}

export default List;
