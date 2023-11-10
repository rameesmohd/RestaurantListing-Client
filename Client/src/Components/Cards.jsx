import React, { useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormModal from '../Components/FormModal'
import { IconButton } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const card = ({loading,obj,deleteData,updateData}) => {
  const [showModal,setShowModal] = useState(false)
  return (
    <>
    <div className="max-w-sm  rounded overflow-hidden shadow-lg hover:scale-105 z-30">
      <img className="w-96 max-w-96 h-44" src={obj.image}  alt="Sunset in the mountains"/>
        <div className="px-6 py-4 min-h-24">
            <div className="font-bold text-xl mb-2">{obj.name}</div>
            <p className="text-gray-700 text-base break-words whitespace-normal min-h-[1.5rem] line-clamp-2">
              {obj.address}
            </p>
        </div>
        <div className="px-6 pt-4 pb-3  flex justify-between">
            <div>
                <ContactPhoneIcon className='mx-2'/>
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
    loading={loading}
    action={updateData}
    setShowModal={setShowModal}
    /> }
    </>
  )
}

export default card
