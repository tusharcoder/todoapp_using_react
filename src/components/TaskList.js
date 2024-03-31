import {useEffect, useState} from "react";
import {getOpenTasks} from "../services/TaskService";

const TaskList = (props)=>{
    const status = props.status;
    const name = props.name || "Tasks"
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        if(status){
            getOpenTasks(status).then((response)=>{
                try {
                    return response.data;
                }catch (e){
                    console.log("Error in parsing response.")
                    throw e;
                }
            }).then((result)=>{
                setTasks(result.data);
                }
            ).catch((error)=>{
                console.log(`Error while fetching the ${status} tasks`)
            })
        }
    },[status, setTasks])
    return (
        <div className="taskList">

            <div className="heading">
                <h2>{name}</h2>
            </div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <div className="item">
                        <div className="radioButton">
                            <input type="checkbox"/>
                        </div>
                        <div className="taskDesc">
                            {task.text}
                        </div>
                        <div className="deleteItem">
                            <button type="button">Del</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;