import { useState } from "react";

export function TaskItem({task,onItemChange,ondelete,onUpdate}){

   const[isediting,setisediting] = useState(false);
   const[editingtext,setiseditingtext] = useState("");
  return(
      <li>
      {isediting?
      <><input value={editingtext} onChange={e=>setiseditingtext(e.target.value)}/>
      <button onClick={()=>{onUpdate(task.id,editingtext);
        setisediting(false);
      }}>save</button>
       <button onClick={() => setisediting(false)}>
            Cancel
          </button>
</>
      :
      <><label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={onItemChange}
              />
              {task.title}
            </label>
          
          <button onClick={e=>setisediting(true)}>edit</button>
          <button onClick={ondelete}>
              Delete
            </button>
            </>
    }
    </li>
  )


  }









   //     return(<><li> 
        
        
            // <label>
            //   <input
            //     type="checkbox"
            //     checked={task.completed}
            //     onChange={onItemChange}
            //   />
            //   {task.title}
            // </label>

            

{/* <button onClick={ondelete}>
              Delete
            </button> */}
//           </li></>)

// }