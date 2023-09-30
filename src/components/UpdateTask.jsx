import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateTask() {
    const { id } = useParams();
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/getTask/${id}`)
            .then(response => {
                const { task, description, duration } = response.data;
                setTask(task);
                setDescription(description);
                setDuration(duration);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/updateTask/${id}`, { task, description, duration })
            .then(response => {
                console.log(response);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Task</h2>
                    <div className="mb-2">
                        <label htmlFor="task">Task Name</label>
                        <input
                            type="text"
                            id="task"
                            placeholder="Enter Task Name"
                            className="form-control"
                            onChange={(e) => setTask(e.target.value)}
                            value={task}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            cols="20"
                            rows="5"
                            placeholder="Enter Task Description"
                            className="form-control"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            placeholder="Enter Task Duration"
                            className="form-control"
                            onChange={(e) => setDuration(e.target.value)}
                            value={duration}
                            required
                        />
                    </div>
                    <button className="btn btn-primary" >Update</button>
                    <Link to="/" className="btn btn-secondary ml-2">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default UpdateTask;
