import React, { use } from 'react'

const App = () => {
  const user={
    username:'saksham',
    password:'1234',
    age:20,
    city:'delhi'
  }

  localStorage.setItem('user',JSON.stringify(user))
  const data=JSON.parse(localStorage.getItem('user'))
  console.log(data)

  return (
    <div>
      APP
    </div>
  )
}

export default App
