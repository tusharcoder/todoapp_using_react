import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([])
  const addTask= function(task){
    if(!task){
      return
    }
    setTasks([...tasks,task])
  }
  return ( <div className="App">
    <h1>Welcome to my todo app</h1>
    <input type="text" placeholder="Add a new task" onKeyPress={event=>{
      if (event.key==='Enter'){
          addTask(event.target.value);
          event.target.value = "";
        }
      }
    }
      />
    <ul>
      {
        tasks.map((task,index)=>
          (<li key={index}>{task}</li>)
        )
      }
    </ul>
  </div>);
}

export default App;
