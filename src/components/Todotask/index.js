import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import TodoItem from "../TodoItem";
import "./index.css";

class Todotask extends Component {
  state = { isCompleted: false, taskValue: "", taskList: [] };

  componentDidMount() {
    const data = localStorage.getItem("taskListData");
    const parsedTodoList = JSON.parse(data);
    console.log(parsedTodoList);
    if (parsedTodoList !== null) {
      this.setState({
        taskList: parsedTodoList,
      });
    }
  }

  addSaveButton1 = () => {
    const { taskList } = this.state;

    localStorage.setItem("taskListData", JSON.stringify(taskList));
  };

  addTodoButton = () => {
    const { taskValue, isCompleted } = this.state;

    if (taskValue === "") {
      alert("Enter Valid Text");
    } else {
      const taskDetails = {
        id: uuidv4(),
        taskname: taskValue,
        isChecked: isCompleted,
      };
      this.setState((prevState) => ({
        taskList: [...prevState.taskList, taskDetails],
        taskValue: "",
      }));
    }
  };

  onChangeTaskValue = (event) => {
    this.setState({ taskValue: event.target.value });
  };

  onStatusChangeTodo = (id) => {
    const { taskList } = this.state;

    const updatedList1 = taskList.map((todo) => {
      if (todo.id === id) {
        const value = !todo.isChecked;
        const Todo1 = { ...todo, isChecked: value };

        console.log(Todo1);
        return Todo1;
      }
      return todo;
    });
    console.log(updatedList1);

    this.setState({ taskList: updatedList1 });
  };

  onDeleteTodo = (id) => {
    const { taskList } = this.state;

    const updatedList = taskList.filter((todo) => todo.id !== id);
    console.log(id);

    this.setState({ taskList: updatedList });
  };

  renderTaskList = () => {
    const { taskList } = this.state;

    if (taskList.length !== 0) {
      return (
        <ul className="todos-main-card">
          {taskList.map((eachTodo) => (
            <TodoItem
              key={eachTodo.id}
              eachTodo={eachTodo}
              onDeleteTodoId={this.onDeleteTodo}
              onStatusChangeTodoId={this.onStatusChangeTodo}
            />
          ))}
        </ul>
      );
    }
    return null;
  };

  render() {
    const { taskValue } = this.state;

    return (
      <div className="todos-bg-container">
        <div>
          <h1 className="todos-heading">Todos List</h1>
          <h1 className="create-task-heading">
            Create <span className="create-task-heading-subpart">Task</span>
          </h1>
          <input
            type="text"
            value={taskValue}
            className="todo-user-input"
            placeholder="Enter your task"
            onChange={this.onChangeTaskValue}
          />
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.addTodoButton}
            >
              Add
            </button>
          </div>
          <h1 className="create-task-heading">
            My <span className="create-task-heading-subpart">Tasks</span>
          </h1>

          <div className="todo-items-container">{this.renderTaskList()}</div>

          <button
            type="button"
            className="button"
            onClick={this.addSaveButton1}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default Todotask;
