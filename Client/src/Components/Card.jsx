import React from 'react'
const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://media.istockphoto.com/id/1079901206/photo/3d-render-of-luxury-restaurant-interior.jpg?s=612x612&w=0&k=20&c=kKj5Uw0ZpuWKX8ZX6eXuKGc1sP86fMjIbZJFbWl9-ZM=" alt="Sunset in the mountains"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
  )
}

export default Card
