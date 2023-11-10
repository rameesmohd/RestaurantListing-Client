import React, { useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormModal from '../Components/FormModal'
import { IconButton } from '@mui/material';
import userAxios from '../Axios/userAxios';
import toast from 'react-hot-toast';

const card = ({obj,deleteData}) => {
  const [showModal,setShowModal] = useState(false)

  const updateData=async(obj)=>{
      try {
        const response = await userAxios.patch('/',obj,{ headers: { 'Content-Type': 'multipart/form-data' }})
        toast.success('Updated Successfully!!')
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
    
  return (
    <>
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <img className="w-full h-44" src={obj.image}  alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{obj.name}</div>
            <p className="text-gray-700 text-base">
              {obj.address}
            </p>
        </div>
        <div className="px-6 pt-4 pb-3 flex justify-between">
            <div>
                {obj.contact}
            </div>
            <div>
              <IconButton onClick={()=>setShowModal(true)}>
                <EditNoteIcon  className='mx-2 hover:scale-105 cursor-pointer'/>
              </IconButton>
              <IconButton onClick={()=>deleteData(obj.id)}>
                <DeleteOutlineIcon className='mx-2 hover:scale-105 cursor-pointer'/>
              </IconButton>
            </div>
        </div>
    </div>
    { showModal && 
    <FormModal 
    role={'edit'} 
    title={'Edit restaurant'} 
    obj={obj}
    action={updateData}
    setShowModal={setShowModal}
    /> }
    </>
  )
}

export default card
