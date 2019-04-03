import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

state = {
  modalInitial: true,
  modalisOpen: false
}


showModal = () => {
  this.setState({modalisOpen: true, modalInitial: false})
}

closeModal = () => {
  this.setState({modalisOpen: false, modalInitial: false})
}
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal modalInitial={this.state.modalInitial} show={this.state.modalisOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalisOpen} /> 
        <button className="Button" onClick={this.showModal} >Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
