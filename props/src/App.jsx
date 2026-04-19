import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Saksham' age={25} />
      <Card user='Babu' age={19} />
    </div>
  )
}

export default App
