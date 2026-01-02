import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
       <div className='px-10 flex justify-between items-center py-6 bg-(--c2)'>
            <h2 className=' text-2xl font-semibold'>MediaSearch</h2> 
            <div className='flex gap-5 items-center'>

            <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/' >Search</Link>
            <Link className='text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-4 py-2' to='/collection'>Collection</Link>
                
            </div>
            </div>
  )
}

export default Navbar