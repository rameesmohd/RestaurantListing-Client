import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import AddIcon from '@mui/icons-material/Add';
import FormModal from '../Components/FormModal'
import { toast } from 'react-hot-toast'
import userAxios from '../Axios/userAxios'
import Swal from 'sweetalert2'

const Home = () => {
  const [showAddModal,setShowAddModal] = useState(false)
  const [listData,setListData] = useState([])
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

  const addNewData=(obj)=>{
    setloading(true)
    userAxios.post('/',obj,{ headers: { 'Content-Type': 'multipart/form-data' }}
    ).then((res)=>{
        setListData((prev)=>[...prev,res.data.data])
        toast.success('Addede successully!!')
    }).catch((err)=>{
        console.log(err)
        toast.error(res.data.message)
    }).finally(()=>{
        setloading(false)
        setShowAddModal(false)
    })
  }
  
  const updateData=async(obj,setShowModal)=>{
    try {
      setloading(true)
      await userAxios.patch('/',obj,{ headers: { 'Content-Type': 'multipart/form-data' }})
      toast.success('Updated Successfully!!')
      fetchData()
    } catch (error) {
      toast.error(error.message)
    } finally {
      setloading(false)
      setShowModal(false)
    }
  }

  const deleteData=(id)=>{
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed){
          try {
            await userAxios.delete(`/?id=${id}`)
            const updatedData=listData.filter((value,index)=>value.id!==id)
            setListData(updatedData)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            })
          } catch (error) {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong.",
              icon: "error"
            });
          }
        }
      })
    } catch (error) {
      toast.error(error.message)
    }}
  
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
    <div className='bg-slate-50 mb-2'>
    <Navbar/>
    <h1 className='text-center text-3xl text-gray-500 my-8 animate-bounce'>Our Restaurants</h1>
    <hr className='mb-4' />
    <div className='container mx-auto px-2'>
        <div className='grid sm:grid-cols-4 gap-2'>
          { listData.map((obj,i)=>{
              return (
                <div key={i} className='flex justify-center'> 
                  <Cards loading={loading} deleteData={deleteData} updateData={updateData} obj={obj} />
                </div>
              )
            }) }
          <div className='flex justify-center w-full min-h-[320px]'>
            <div onClick={()=>setShowAddModal(!showAddModal)} className="w-full z-20 rounded overflow-hidden shadow-lg bg-slate-300 flex justify-center items-center hover:bg-slate-200 cursor-pointer">
                  <AddIcon fontSize='large' className='text-gray-700 hover:scale-125'/>
            </div>  
          </div>
        </div>
    </div>
    </div>
    { showAddModal && <FormModal loading={loading} role={'add'} title={'Add new restaurant'} setShowModal={setShowAddModal} action={addNewData} /> }
    </>
  )
}

export default Home
    