import React from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  return (
    <div className='bg-slate-50 mb-2'>
    <Navbar/>
    <h1 className='text-center text-3xl text-gray-500 my-8 underline animate-bounce'>Our Restaurants</h1>
    <div className='container mx-auto '>
        <div className='grid sm:grid-cols-4 gap-2'>
          {
            [...Array(5)].map(()=>{
              return (
                <div className='flex justify-center'> 
                  <Cards/>
                </div>
              )
            })
          }
          <div className="max-w-sm  rounded overflow-hidden shadow-lg bg-slate-300 flex justify-center items-center hover:bg-slate-200 cursor-pointer">
                <AddIcon fontSize='large' className='text-gray-700'/>
          </div>
          </div>   
    </div>
    </div>
  )
}

export default Home
    