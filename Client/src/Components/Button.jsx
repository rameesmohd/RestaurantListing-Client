import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const button = ({text}) => {
  return (
    <>
    <Stack spacing={2} direction="row">
      <Button variant="outlined">{text}</Button>
    </Stack>
    </>
  )
}

export default button
