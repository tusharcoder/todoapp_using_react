import TaskList from "../components/TaskList"
import {useState} from "react";
const TODO = (props)=>{
const pendingTasks = [
    { text: "Call the supplier to negotiate new terms for the upcoming delivery." },
    { text: "Prepare the environment for deploying the new API endpoints." },
    { text: "Update the FAQ section with the latest common customer inquiries and responses." },
    { text: "Review the pull request from John and provide feedback on the database schema changes." },
    { text: "Outline the steps necessary for the server migration happening next month." }
];

const completedTasks = [
    { text: "Draft the monthly newsletter for subscribers including the latest feature updates." },
    { text: "Conduct user interviews to gather feedback on the new dashboard interface." },
    { text: "Refactor the authentication module to allow for two-factor authentication methods." },
    { text: "Update the team calendar with the project milestones and individual responsibilities." },
    { text: "Organize the shared drive files into folders by project and archive old documents." }
];

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
                {activeTaskList==="pendingTaskList"?<TaskList tasks={pendingTasks} name="Pending Tasks"/>:""}

                {activeTaskList==="completedTaskList"?<TaskList tasks={completedTasks} name="Completed Tasks"/>
:""}
            </div>
        </div>
    );
}
export default TODO;