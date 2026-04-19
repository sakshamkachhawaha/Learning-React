import React from 'react'

function card(props) {
    console.log(props);
  return (

      <div className="card">
        <img src="https://images.unsplash.com/photo-1763503836825-97f5450d155a?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>{props.age}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default card
