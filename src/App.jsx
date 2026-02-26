import React, { useState } from "react";
import "./index.css";

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask]= useState([])
 
  const submitHander = (e) =>{
    e.preventDefault(e);
    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form onSubmit={(e)=>{
        submitHander(e)
      }} className="flex gap-4 lg:w-1/2 p-10 flex-col items-start">
        <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          type="text"
          placeholder="Enter Notes Heading"
        />
        <textarea
          className="px-5 w-full h-32  font-medium py-2 border-2 outline-none rounded"
          placeholder="Write Details"
           value={details}
        onChange={(e) =>
          setDetails(e.target.value)
        }
        ></textarea>
        <button className="bg-white font-medium w-full outline-none text-black px-5 py-2 rounded cursor-pointer">
          Submit
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">

        {task.map(function(elem, idx){
          return <div key={idx} className="h-52 w-52 bg-white text-black rounded-2xl p-4">
            <h1 className="text-xl font-bold text-red-400">{elem.title}</h1>
            <p className="text-[16px] leading-0 mt-2 font-normal text-gray-400">{elem.details}</p>
          </div>
        })}

          
        </div>
      </div>
    </div>
  );
};

export default App;
