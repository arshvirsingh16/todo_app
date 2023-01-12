'use client'
// import React from 'react'
import Link from 'next/link'

import React, {useState} from 'react'
function Home() {
    const [count, setCount] = useState(0)
    
  return (
   <>
   <button onClick={() => setCount(count + 1)}>+</button>
   <button onClick={() => setCount(count - 1)}>-</button>

   <h1>
        {count}
    </h1>
   </>
    
  )
}

export default Home