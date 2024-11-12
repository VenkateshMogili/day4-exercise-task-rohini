import ListGroup from "react-bootstrap/ListGroup";
import IconsFa from "./IconsFa";
import FormCheckButton from "./FormCheckButton";
import { useState } from "react";
import AddButton from "./AddButton";
import DropDown from "./assets/DropDown";

function ToDoTask() {
  const [toDoTasks, setToDoTasks] = useState([
    "Create React App",
    "Learn React",
    "Create a ToDo App",
  ]);
  const [toDOItem, setToDoItem] = useState("Drink Water");

  const handleAddTask = () => {
    const newTask = prompt("Please enter todo task", "Drink Water");
    setToDoItem(newTask);
    setToDoTasks((t) => [...t, newTask]);
  };

  return (
    <div>
      <div className="add-container">
        <AddButton addTask={handleAddTask} />
        <DropDown dropDownActions={toDoTasks} />
      </div>
      <div className="tasks-container">
        <ListGroup as="ul">
          {toDoTasks.map((task, index) => (
            <ListGroup.Item as="li" key={index} className="task-item">
              <div className="task-name">
                <FormCheckButton />
                <span>{task}</span>
              </div>
              <div className="icons-fa">
                <IconsFa />
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default ToDoTask;
