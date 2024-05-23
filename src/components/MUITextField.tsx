import { InputAdornment, Stack, TextField } from '@mui/material'
import { useState } from 'react';

const MUITextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      {/* form related props */}
      <Stack direction={"row"} spacing={2}>
        <TextField label="Form Input" required />
        <TextField label="Form Input" />
        <TextField
          label="Password"
          type="password"
          disabled
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      {/* error prop */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(event) => setValue(event?.target.value)}
          error={!value}
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
        />
      </Stack>
    </Stack>
  );
}

export default MUITextField