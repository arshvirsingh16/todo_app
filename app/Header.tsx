import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <>
    
    <header>
        <Link href="/">Home</Link>
        <Link href="/todos">Todo</Link>
    </header>
    </>
  )
}

export default Header