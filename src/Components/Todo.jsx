import react, { useState } from 'react'
import "./todo.css"

export default function Todo() {

   const [task, settask] = useState(["Eat breakfast", "Take a shower", "walk the dog"])
   const [newtask, setnewtask] = useState("")

   function handleinputchange(event) {
      setnewtask(event.target.value);
   }

   function addtask() {
      if (newtask.trim() !== "") {
         settask(t => [...t, newtask]);
         setnewtask("");
      }
   }

   function deletetask(index) {
      const updatedtask = task.filter((_, i) => i !== index);
      settask(updatedtask);

   }

   function movetaskup(index) {
      if (index > 0) {
         const updatedtask = [...task];
         [updatedtask[index], updatedtask[index - 1]] =
            [updatedtask[index - 1], updatedtask[index]];
         settask(updatedtask);
      }

   }

   function movetaskdown(index) {
      if (index < task.length - 1) {
         const updatedtask = [...task];
         [updatedtask[index], updatedtask[index + 1]] =
            [updatedtask[index + 1], updatedtask[index]];
         settask(updatedtask);
      }
   }

   return (

      <div className='todo -list'>
         <h1>To-Do-List</h1>

         <div>
            <input type='text' placeholder='enter your task' onChange={handleinputchange} />
            <button className='add-btn' onClick={addtask}>Add</button>
         </div>

         <ol>
            {task.map((task, index) =>
               <li key={index}>

                  <span className='text'>{task}</span>
                  <button className='move-btn' onClick={() => movetaskup(index)}>Edite</button>
                  <button className='move-btn' onClick={() => movetaskdown(index)}>Update</button>
                  <button className='delete-btn' onClick={() => deletetask(index)}>Delete</button>

               </li>
            )}


         </ol>
      </div>
   )
}; 