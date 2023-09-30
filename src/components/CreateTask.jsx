import React, { useState } from "react";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateTask (){
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTaskData = {
            task,
            description,
            duration,
        };

        
        axios.post("http://localhost:8080/createTask", newTaskData)
        .then(response => {
            console.log("Task created successfully:", response.data);
            
            setTask('');
            setDescription('');
            setDuration('');
            navigate('/');
        })
        .catch(err => {
            console.error("Error creating task:", err);
        });
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Task</h2>
                    <div className="mb-2">
                        <label htmlFor="task">Task Name</label>
                        <input type="text" id="task" name="task" placeholder="Enter Task Name" className="form-control"
                            value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" cols="20" rows="5" placeholder="Enter Task Description" className="form-control"
                            value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="duration">Duration</label>
                        <input type="text" id="duration" name="duration" placeholder="Enter Task Duration" className="form-control"
                            value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
            </div>
        </div>
    )
}

export default CreateTask;
