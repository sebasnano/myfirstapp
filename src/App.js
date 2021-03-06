import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import tasks from "./sample/tasks.json";

import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: Date.now(),
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: newTasks,
    });
  };

  checkDone = (id) => {
    const newTask = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: newTask,
    });
  };

  render() {
    return (
      <div>
        <TaskForm addTask={this.addTask} />
        <Tasks
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
        <Posts />
      </div>
    );
  }
}

export default App;
