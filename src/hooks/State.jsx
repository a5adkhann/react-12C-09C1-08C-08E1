import React, { useState } from 'react'

const State = () => {

    const [count, setCount] = useState(0);

    // function handleCount(){
    //     setCount(count + 1);
    // }

  return (
    <>
        <p>My Count is {count}</p>
        <button onClick={() => setCount(count+1)} className='bg-green-600 px-8 py-1 text-white font-bold'>Increment</button>
        <br />
    </>
  )
}

export default State
