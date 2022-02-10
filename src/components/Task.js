import React, { Component } from "react";
import PropTypes from 'prop-types';
;


class Task extends Component {
  StyleComplete() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const { task } = this.props;
    return (
      <p style={this.StyleComplete()}>
        {task.title} - {task.description} - {task.done} - {task.id}
        <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
        <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
      </p>
    );
  }
}

Task.propTypes = {
  task : PropTypes.object.isRequired
}

const btnDelete = {
  background: "#ea2027",
  border: "none",
  borderRadius: "50%",
  color: "#fff",
  fontSize: "18px",
  padding: "10px 15px",
  cursor: "pointer",
};

export default Task;
