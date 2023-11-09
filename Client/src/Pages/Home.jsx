import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Card'


const Home = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center text-3xl text-gray-500 my-8 underline animate-bounce'>Our Restaurants</h1>
    <div className='container mx-auto'>
        <div className='grid sm:grid-cols-4 gap-2'>
          {
            [...Array(5)].map(()=>{
              return (
                <div className='sm:col-span-1'> 
                <Cards/>
              </div>
              )
            })
          }
          </div>   
    </div>
    </>
  )
}

export default Home
    