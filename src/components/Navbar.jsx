import React from 'react'

function Navbar() {

    const navEle = 
    [
        "Disasters and Emergencies",
        "Make a Plan",
        "Ready Communities",
        "Ready Business",
        'Ready Kids',
        'Resources'
    ]

  return (
    <nav className='flex gap-5 w-full fixed top-0 left-0 z-[999] items-center justify-center py-5 bg-lime-600 rounded-b-xl shadow-lg shadow-black-950'>

        {
            navEle.length>0? 
            navEle.map((ele,i)=>(
                <div 
                key={i}
                className='text-[1.2vw]  capitalize hover:text-white ease-out duration-200 cursor-pointer  font-sans font-light text-zinc-950'
                >{ele}</div>
            ))
            : console.log("invalid data")
        }
      
    </nav>
  )
}

export default Navbar
