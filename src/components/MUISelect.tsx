import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

const MUISelect = () => {
  const [countries, setCountries] =  useState<string[]>([]);
  console.log({countries});
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setCountries(typeof value === 'string' ? value.split(',') : value)
  }

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true
        }}
        size='small'
        color='secondary'
        helperText='Please select your country'
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="USA">America</MenuItem>
        <MenuItem value="AUS">Austrailia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MUISelect