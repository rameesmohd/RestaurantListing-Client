import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import AddIcon from '@mui/icons-material/Add';
import FormModal from '../Components/FormModal'
import { toast } from 'react-hot-toast'
import userAxios from '../Axios/userAxios'

const image=[
  {
    id : '1234', 
    image : "https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=",
    name : 'The Coldest Sunset',
    address : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    contact : 5598658551
  },
  {
    id : '125634', 
    image : "https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=",
    name : 'The Coldest Sunset',
    address : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
    contact: 23665554485
  }
]

const Home = () => {
  const [showAddModal,setShowAddModal] = useState(false)
  const [listData,setListData] = useState(image)
  const [loading,setloading] = useState(false)

  const fetchData=async()=>{
      try {
        const res = await userAxios.get('/')
        setListData(res.data.data)
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
  }

  useEffect(()=>{
    fetchData()
  },[])

  const addNewData=(obj)=>{
    setloading(true)
    userAxios.post('/',obj,{ headers: { 'Content-Type': 'multipart/form-data' }}
    ).then((res)=>{
        console.log(res)
        setListData((prev)=>[...prev,res.data.data])
        toast.success(res.data.message)
    }).catch((err)=>{
        console.log(err)
        toast.error(res.data.message)
    }).finally(()=>{
        setloading(false)
        setShowAddModal(false)
    })
  }

  return (
    <>
    <div className='bg-slate-50 mb-2'>
    <Navbar/>
    <h1 className='text-center text-3xl text-gray-500 my-8  animate-bounce'>Our Restaurants</h1>
    <div className='container mx-auto '>
        <div className='grid sm:grid-cols-4 gap-2'>
          {
            listData.map((obj,i)=>{
              return (
                <div key={i} className='flex justify-center'> 
                  <Cards obj={obj} />
                </div>
              )
            })
          }
          <div onClick={()=>setShowAddModal(!showAddModal)} className="max-w-sm z-20 rounded overflow-hidden shadow-lg bg-slate-300 flex justify-center items-center hover:bg-slate-200 cursor-pointer">
                <AddIcon fontSize='large' className='text-gray-700 hover:scale-125'/>
          </div>
        </div>
    </div>
    </div>
    { showAddModal && <FormModal loading={loading} role={'add'} title={'Add new restaurant'} setShowModal={setShowAddModal} action={addNewData} />}
    </>
  )
}

export default Home
    