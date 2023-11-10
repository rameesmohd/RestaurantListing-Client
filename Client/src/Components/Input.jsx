import { TextField } from '@mui/material'
import React from 'react'

const Input = ({setData,defaultValue,type,label}) => {
  return (
    <>
        <TextField 
        onChange={(e)=>setData(e.target.value)} 
        defaultValue={defaultValue} 
        type={type}  
        id="outlined-basic" 
        label={label} 
        variant="outlined"
        style={{ width: '300px', fontSize: '16px', marginTop : '10px'}}
        />
    </>
  )
}

export default Input
