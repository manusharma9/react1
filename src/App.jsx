// import React, { useState } from 'react'

// const App = () => {
   
//   const [a, seta] = useState(0)
  


//   return (
//     <div>
//       <button onClick={} >Increment</button>
//       <button onClick={seta-1}> Decrement </button>
//       <h1>{a}</h1>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [count, setcount] = useState(0)


//   function handleclick() {
//     setcount(count+1)
//   }


//   return (
//     <div>
//       <button onClick={handleclick}>Click me {count}</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const [count, setcount] = useState(0)




const App = () => {
  return (
    <div>
      <button onClick={setcount(count+1) }  > Increment value is {count}</button>
      <button onClick={setcount(count-1)} > Decrement value is{count}</button>
    </div>
  )
}

export default App