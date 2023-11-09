import React, { useEffect, useRef, useState } from "react";
import Buttom from '../Components/Button'

const Modal=({loading,role,obj,title,setShowModal,action})=>{
  const [name,setName] = useState('')
  const [address,setAddress] = useState('')
  const [contact,setContact] = useState('')
  const [image,setImage] = useState('')
  const [error,setError] = useState({})

  const handleData = () => {
    let obj = {
      name: name,
      address: address,
      contact: contact,
      image: image,
    };
    let err = {};
    if (name.trim() === '') {
      err.name = 'Enter a name';
    }
    if (address.trim() === '') {
      err.address = 'Enter an address';
    }
    if (contact.trim() === '') {
      err.contact = 'Enter your contact number';
    }
    console.log(err);
    if (Object.keys(err).length === 0) {
      action(obj);
    } else {
      setError(err);
    }
  };

  return (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto max-w-xl my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-3">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    {title}
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)} >
                    <span className="text-4xl">
                      ×
                    </span>
                  </button>
                </div>
                <form>
                <div className="px-3 flex-auto">
                <div className="flex items-center justify-center w-full">
                  
                { role==='edit' && (obj?.image ? <img src={obj.image} className="h-64 object-cover w-72" alt="" /> :  
                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" onChange={(e)=>setImage(e.target.files[0])} type="file" className="hidden" />
                </label> )}

                { role==='add' && (image ? <img src={image instanceof File ? URL.createObjectURL(image):''} className="h-64 object-cover w-72" alt="" /> :
                  <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" accept="image/*" onChange={(e)=>setImage(e.target.files[0])} type="file" className="hidden" />
                  </label> )}

                </div>
                  <div>
                    <label className="text-gray-500 text-sm">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} className="w-full border border-gray-400 rounded-md" defaultValue={obj?.name} type="text" />
                    { error.name && <p className="text-xs text-red-500">Enter a name</p>}
                  </div>
                  <label className="text-gray-500 text-sm">Address</label>
                  <div className="w-full">
                    <textarea onChange={(e)=>setAddress(e.target.value)}  name="" id="" cols="35" rows="3" defaultValue={obj?.address} className="border border-gray-400 rounded-md"></textarea>
                    { error?.address && <p className="text-xs text-red-500">Enter address</p>}
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm">Contact</label>
                    <input onChange={(e)=>setContact(e.target.value)} defaultValue={obj?.contact} className="w-full border border-gray-400 rounded-md" type="number" />
                    { error?.contact && <p className="text-xs text-red-500">Enter contact number</p>}
                  </div>
                </div>
                </form>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Buttom loading={loading} text={ 'Save'} btnAction={handleData}/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}

export default Modal
