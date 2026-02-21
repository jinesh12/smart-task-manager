import {useState} from 'react';
let nextid = 3;
const intialtasks = [{id:0,task:"learnreact",status:false},{id:1,task:"learn python",status:false}]

function App() {
  const[tasks,setTasks] = useState(intialtasks);
  const[newtask,setNewtask] = useState("");
  function addtask(){
    if(newtask.trim()===""){
      return;
    }
    setTasks([...tasks,{id:nextid++,task:newtask,status:false}]);
    setNewtask("");
    
  }


  function deleteitems(id){
    const newlist = tasks.filter(task=>
      task.id!==id
    )
    setTasks(newlist)
  }


  function handlechange(id){
    const nexttask = tasks.map(task=>
      task.id===id?{...task,status:!task.status}:task
    )
    setTasks(nexttask)
  }
  return (
    <div>
      <h1>Smart Task Manager</h1>
      ADD new item: <input value={newtask} onChange={e => setNewtask(e.target.value)}/>
      <button onClick={addtask}>add task</button>
      <ul>
        {tasks.map(task=>
          <li key={task.id}>
            
            <label>
              <input 
              type="checkbox"
              checked={task.status}
              onChange={()=>handlechange(task.id)}/>
            </label>
            {task.task}-{task.status?"done":"not done"}
            <button onClick={()=>deleteitems(task.id)}>delete</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
