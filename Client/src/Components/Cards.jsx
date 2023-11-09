import React, { useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormModal from '../Components/FormModal'
import { IconButton } from '@mui/material';


const card = ({obj}) => {
  const [showModal,setShowModal] = useState(false)
  return (
    <>
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <img className="w-full" src={obj.image} alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{obj.name}</div>
            <p className="text-gray-700 text-base">
              {obj.address}
            </p>
        </div>
        <div className="px-6 pt-4 pb-3 flex justify-end">
            <div>
              <IconButton onClick={()=>setShowModal(true)}>
                <EditNoteIcon  className='mx-2 hover:scale-105 cursor-pointer'/>
              </IconButton>
              <DeleteOutlineIcon className='mx-2 hover:scale-105 cursor-pointer'/>
            </div>
        </div>
    </div>
    { showModal && <FormModal 
    role={'edit'} 
    title={'Edit restaurant'} 
    obj={obj}
    setShowModal={setShowModal}
    /> }
    </>
  )
}

export default card
