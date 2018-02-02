import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import * as actions from './actions/index';
import './App.css';
import CalendarDay from './calendarDay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalOpen: false,
      value: ''
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveValue = this.saveValue.bind(this);
    this.setUpdateValue = this.setUpdateValue.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  saveValue(event) {
    if (this.state.value === '') {
      alert('Task name should not be empty');
      return;
    }
    if (this.props.content.selectedTask !== '') {
      // update
      this.props.updateTask({
        day: this.props.content.selectedDay,
        oldDescription: this.props.content.selectedTask,
        newDescription: this.state.value
      });
    } else {
      // create
      this.props.addTask({
        day: this.props.content.selectedDay,
        description: this.state.value
      });
    }
    this.setState({ value: '' });
    this.closeModal();
    event.preventDefault();
    event.stopPropagation();
  }

  closeModal() {
    this.props.changeModalState(false);
  }

  setUpdateValue(value) {
    this.setState({ value: value });
  }

  render() {
    const arrayDays=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    return (
      <div className={'calendarContainer'}>
        <Modal isOpen={this.props.content.modalOpen} contentLabel="Modal">
          <h1>{this.props.content.selectedTask !== '' ? 'Update Task' : 'Create Task'}</h1>
          <label>
              Task:
              <input className={'button'} type="text" name="taskname" onChange={this.handleChange} value={this.state.value}/>
          </label>
          
          <button className={'button'} onClick={(e) => this.saveValue(e)}>
            {this.props.content.selectedTask !== '' ? 'Update' : 'Create'}
          </button>

          <button className={'button'} onClick={this.closeModal}>Close</button>
        </Modal>
        {
          arrayDays.map((day, index) => (
            <CalendarDay key={'ad' + index} props={this.props} day={day} setUpdateValue={this.setUpdateValue}/>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({ content: state.mainReducer });
  
export default connect(mapStateToProps, actions)(App);
