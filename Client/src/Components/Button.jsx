import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';

const button = ({text,btnAction,loading}) => {
  return (
    <>
    <Stack spacing={2} direction="row">
      <Button onClick={()=>btnAction()} variant="outlined">{loading ? <CachedIcon className='animate-spin'/> : text}</Button>
    </Stack>
    </>
  )
}

export default button
