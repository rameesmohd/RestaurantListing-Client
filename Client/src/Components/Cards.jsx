import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const card = () => {
  return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
        <img className="w-full" 
         src="https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM="
         alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 pt-4 pb-3 flex justify-end">
            <div>
              <EditNoteIcon className='mx-2 hover:scale-105 cursor-pointer'/>
              <DeleteOutlineIcon className='mx-2 hover:scale-105 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default card
