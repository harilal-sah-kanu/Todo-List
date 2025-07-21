import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoListModern.css";

export default function ToDoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isCompleted: false },
  ]);
  let [newTodo, setNewTodos] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { task: newTodo, id: uuidv4(), isCompleted: false },
      ];
    });
    setNewTodos("");
  };

  let updateToDoValue = (event) => {
    setNewTodos(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  let markAllDone = () => {
    setTodos((currTodos) =>
      currTodos.map((todo) => {
        return {
          ...todo,
          isCompleted: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((currTodos) =>
      currTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isCompleted: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="todoContainer">
      <div className="todoInputSection">
        <input
          className="todoInput"
          placeholder="Add a Task"
          value={newTodo}
          onChange={updateToDoValue}
        />
        <button className="todoBtn addBtn" onClick={addNewTask}>
          <span className="icon">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
          </span>{" "}
          Add Task
        </button>
      </div>
      <hr className="divider" />
      <h2 className="todoTitle">
        <i class="fa-solid fa-list"></i> &nbsp; To Do Tasks
      </h2>
      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.id} className="todoItem">
            <span
              className={todo.isCompleted ? "todoText completed" : "todoText"}
            >
              {todo.task}
            </span>

            <button
              className="todoBtn deleteBtn"
              onClick={() => deleteTodo(todo.id)}
            >
              <span className="icon">
                <i class="fa-solid fa-trash"></i>
              </span>
            </button>

            <button
              className="todoBtn upperBtn"
              onClick={() => upperCaseOne(todo.id)}
            >
              <span className="icon">
                <i class="fa-solid fa-font"></i>
              </span>
            </button>

            <button
              className="todoBtn doneBtn"
              onClick={() => markAsDone(todo.id)}
            >
              <span className="icon">
                <i class="fa-solid fa-circle-check"></i>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="todoActions">
        <button className="todoBtn upperAllBtn" onClick={upperCaseAll}>
          <span className="icon">
            <i class="fa-solid fa-font"></i>
          </span>{" "}
          Upper Case All
        </button>

        <button className="todoBtn doneAllBtn" onClick={markAllDone}>
          <span className="icon">
            <i class="fa-solid fa-circle-check"></i>
          </span>
          Mark All As Done
        </button>
      </div>
    </div>
  );
}
