import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("blue");
  return (
    <div>
      <div className='h-screen w-full' style={{backgroundColor: color}}>
         <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>
              <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"red"}}>Red</button>
              <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"yellow"}}>Yellow</button>
              <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"pink"}}>Pink</button>
              <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{background:"green"}}>Green</button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default App
