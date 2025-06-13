import React, { useState } from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function handleTaskChange(e){
        setTask(e.target.value);
    }

    function handleAddTask(){
        const prevTask = document.getElementById('task-input').value;
        if(prevTask.trim() !== ""){
            setTasks(t => [...t, prevTask]);
        }
        setTask("");
    }

    function handleRemoveTask(index){
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function handleMoveUp(index){
        if(index > 0){
            const updatesTasks = [...tasks];
            [updatesTasks[index - 1], updatesTasks[index]] = [updatesTasks[index], updatesTasks[index - 1]];
            setTasks(updatesTasks);
        }
    }

    function handleMoveDown(index){
        if(index+1 < tasks.length){
            const updatedTasks = [...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]]
            setTasks(updatedTasks)
        }
    }

    return(
    <>
        <h1>To-Do-List</h1>
        <div className="input-container">
            <input type="text" onChange={handleTaskChange} value={task} id="task-input"/>
            <button onClick={handleAddTask}>Add</button>
        </div>
        <div className="tasks">
            <ol className="ol-container">
                {tasks.map((task, index) => {
                    return <li key={index} className="list-item" id={index}>
                        {task} 
                        <div className="btn-container">
                            <button onClick={() => handleRemoveTask(index)} className="delete-btn">Delete</button> 
                            <button className="btn" onClick={() => handleMoveUp(index)}>👆</button>
                            <button className="btn" onClick={() => handleMoveDown(index)}>👇</button>
                        </div>
                        </li>
                })}
            </ol>
        </div>
    </>)
}

export default ToDoList