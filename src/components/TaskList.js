const TaskList = (props)=>{
    const tasks = props.tasks||[
        {text:"lorem ipsum...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
        {text:"lorem ipsum...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
        {text:"lorem ipsum...lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"},
    ];
    const name = props.name || "Tasks"
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