import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Card'

const Home = () => {
  return (
    <>
        {/* <Navbar/> */}
        <div className='container mx-auto w-full h-screen grid sm:grid-cols-4 gap-2'>
          <div className='col-span-1'> 
            <Cards/>
          </div>
          <div className='col-span-1'> 
            <Cards/>
          </div>   <div className='col-span-1'> 
            <Cards/>
          </div>   <div className='col-span-1'> 
            <Cards/>
          </div>
        </div>
    </>
  )
}

export default Home
    