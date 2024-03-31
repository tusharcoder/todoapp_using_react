import TaskList from "../components/TaskList"
import {useState} from "react";
const TODO = (props)=>{
const [activeTaskList,setActiveTaskList] = useState("pendingTaskList");

const activateTaskList=(event)=>{
    setActiveTaskList(event.target.value);
}

    return (
        <div className={"todoContainer"}>
            <div className={"nav"}>
                <div className="heading">
                    <h2>Manage Tasks</h2>
                </div>
                <div className="item">
                    <button className="button" id="addTask">Add Task</button>
                </div>
                <div className="item">
                    <button className="button" id="pendingTask" onClick={activateTaskList} value="pendingTaskList">My Pending Tasks</button>
                </div>
                <div className="item">
                    <button className="button" id="completedTask" onClick={activateTaskList} value="completedTaskList">My Completed Tasks</button>
                </div>
            </div>

            <div className="contentContainer">
                {activeTaskList==="pendingTaskList"?<TaskList status="pending" name="Pending Tasks"/>:""}

                {activeTaskList==="completedTaskList"?<TaskList status="completed" name="Completed Tasks"/>
:""}
            </div>
        </div>
    );
}
export default TODO;