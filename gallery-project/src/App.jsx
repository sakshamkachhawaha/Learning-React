import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [userData, setUserData] = useState([])

  const getData=async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserData(response.data) 
  }

  useEffect(function(){
    getData()
  },[])

  let printUserData = <h3 className='text-xl font-bold flex justify-center'>'User Not Available'</h3>

  if (userData.length > 0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx} className=''>
        <a href={elem.url} target='_blank'>
          <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
        <img className=" h-full w-full object-cover" src={elem.download_url} alt="" />
      </div>
      <div className='flex justify-center p-1 bg-white rounded-xl mt-1'>
        <h2 className='text-green-500 font-bold text-lg'>{elem.author}</h2>
      </div>
        </a>
      </div>
    })
  }
  return (
    <div className='bg-black p-4 overflow-auto h-screen text-white'>
      <div className='flex flex-wrap gap-4 '>
        {printUserData}
      </div>



    </div>
  )
}

export default App
