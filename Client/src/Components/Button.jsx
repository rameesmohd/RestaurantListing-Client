import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const button = ({text,action}) => {
  return (
    <>
    <Stack spacing={2} direction="row">
      <Button onClick={()=>action()} variant="outlined">{text}</Button>
    </Stack>
    </>
  )
}

export default button
