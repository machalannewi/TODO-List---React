import React, {useState} from "react"


function ToDoList() {

  const [tasks, setTask] = useState([])
  const [newTask, setNewTask] = useState("")


  function handleTaskChange(e) {
    setNewTask(e.target.value)
  }

  function addNewTask() {
    if (newTask.trim() !== "") {
      setTask(t => [...t, newTask])
      setNewTask("");
    }
  }

  function removeTask(index) {
    setTask(t => t.filter((_, i) => i !== index))
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]]
      setTask(updatedTask)
    }

  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]]
      setTask(updatedTask)
    }
  }



  return (
    <div>
      <h1>To-Do-List</h1>
      <input type="text" placeholder="Enter Task..." onChange={handleTaskChange} />
      <button className="add-button" onClick={addNewTask}>Add</button>


      <div className="container">
      <ul>
        {tasks.map((task, index) =>
          <li key={index}>{task}
          <button className="delete-button" onClick={() => removeTask(index)}>Delete</button>
          <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
          <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
          </li>)}
      </ul>
      </div>

    </div>
  )
}
export default ToDoList;