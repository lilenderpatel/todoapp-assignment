import { AiOutlineDelete } from "react-icons/ai";

import "./index.css";

const TodoItem = (props) => {
  const { eachTodo, onDeleteTodoId, onStatusChangeTodoId } = props;

  const onChangeTodoList1 = () => {
    onDeleteTodoId(eachTodo.id);
  };

  const taskStyle = eachTodo.isChecked ? "checked" : null;

  const onChangeCheckbox = () => {
    onStatusChangeTodoId(eachTodo.id);
  };

  return (
    <li className="label-container" key={eachTodo.id}>
      <button
        type="button"
        className="delete-icon-container"
        onClick={onChangeCheckbox}
      >
        <input
          type="checkbox"
          value={eachTodo.isChecked}
          checked={eachTodo.isChecked}
          className="checkbox-input "
          placeholder="What needs to be done?"
        />
      </button>

      <div className="containerClassName">
        <p className={`labelClassName ${taskStyle}`}>{eachTodo.taskname}</p>
        <button
          type="button"
          className="delete-icon-container"
          onClick={onChangeTodoList1}
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
