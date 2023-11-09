import React, { useState } from "react";
import Buttom from '../Components/Button'

const Modal=({obj,title,setShowModal})=>{
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
                <div class="flex items-center justify-center w-full">
                 { obj?.image ? <img src={obj.image} alt="" /> :
                  <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                          </svg>
                          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                          <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                  </label> }
                </div>
                  <div>
                    <label className="text-gray-500 text-sm">Name</label>
                    <input className="w-full border border-gray-400 rounded-md" defaultValue={obj?.name} type="text" />
                  </div>
                  <label className="text-gray-500 text-sm">Address</label>
                  <div className="w-full">
                    <textarea name="" id="" cols="35" rows="3" defaultValue={obj?.address} className="border border-gray-400 rounded-md"></textarea>
                  </div>
                  <div>
                    <label className="text-gray-500 text-sm">Contact</label>
                    <input defaultValue={obj?.contact} className="w-full border border-gray-400 rounded-md" type="number" />
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
                  <Buttom text={'Save'} action={()=>setShowModal(false)}/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  );
}

export default Modal
