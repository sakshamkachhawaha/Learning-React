import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask=[...task];
    copyTask.push({
      title,
      details
    })
    setTask(copyTask)

    setTitle("")
    setDetails("")
  }

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  }

 
  return (
    <div className='h-screen bg-black text-white lg:flex '>
      <form className='flex items-start lg:w-1/2 flex-col  gap-5 p-10' onSubmit={(e)=>{
          submitHandler(e)
      }}>
      <h1 className='font-bold text-5xl '>Add Notes</h1>

      {/* Pehla Input For Heading */}
          <input 
            type="text" 
            placeholder="Enter Notes Heading" 
            className='px-5 py-2 font-medium border-2 w-full rounded outline-none'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />


      {/* DETAILED WALA INPUT  */}
          <textarea 
            type="text" 
            className='px-5 py-2 border-2 font-medium rounded w-full outline-none flex items-start flex-row h-32'
            placeholder='Write Details'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button className='bg-white active:scale-95 font-medium text-black px-5 py-2 rounded w-full outline-none '>Add Notes</button>
        
      </form>
      <div className='p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-5xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-[90%]">
            {task.map(function(elem,idx){
              return (
                <div key={idx} className='flex justify-between flex-col item-start relative text-black px-4 pt-9 pb-4 w-40 rounded-xl h-52 bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover '>
                  <div>
                    <h3 className='font-bold text-lg leading-tight'>{elem.title}</h3>
                    <p className='mt-2 leading-tight text-sm font-medium text-gray-600'>{elem.details}</p>
                  </div>
                  <button onClick={()=>{
                    deleteNote(idx)
                  }} className='bg-red-500 cursor-pointer active:scale-95 w-full text-white px-2 py-1 text-xs rounded-2xl mt-2'>Delete</button>

                </div>
              )
            })}
        </div> 
      </div>
    </div> 
  )
}
 
export default App 
 