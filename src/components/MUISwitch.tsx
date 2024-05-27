import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

const MUISwitch = () => {
  const [checked, setChecked] = useState(false);

  console.log({ checked });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="secondary"
          />
        }
      />
    </Box>
  );
}

export default MUISwitch