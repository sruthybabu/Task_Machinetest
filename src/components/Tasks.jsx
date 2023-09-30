import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Tasks (){
    const [tasks, setTasks] =useState([])

    useEffect(()=>{
        axios.get('http://localhost:8080')
        .then(response => setTasks(response.data))
        .catch(err=>console.log(err))
      })

      const handleDelete=(id)=>{
        axios.delete('http://localhost:8080/deleteTask/'+id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    
      }

    return(
        
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div style={{ display: 'flex', gap: '10px' }}>
                <Link to="/create" className="btn btn-success" >Add Task</Link>
                <Link to="/view" className="btn btn-success">View Task</Link>

                </div>
                

                <table className="table">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task)=>{
                                return <tr>
                                    <td>{task.task}</td>
                                    <td>{task.description}</td>
                                    <td>{task.duration}</td>
                                    <td>
                                    <Link to={`/update/${task._id}`} className="btn btn-success" style={{ marginBottom: '10px' }}>Update</Link>
                                    <button className="btn btn-danger" onClick={(e)=>handleDelete(task._id)}>Delete</button>
                                    </td>

                                </tr>
                                
                            })
                        }
                    </tbody>
                </table>
            </div>   
        </div>
    )
}

export default Tasks;