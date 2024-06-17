
import { Stack, Chip, Avatar } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face'
import { useState } from "react";

const MUIChip = () => {
  const [chips, setChips] = useState(['Chip1', 'Chip2', 'Chip3']);

  const handleDelete = (chipToDel: string) => {
    setChips(chips => chips.filter((chip) => chip !== chipToDel));
  }
  
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip Outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>N</Avatar>}
      />
      <Chip label='Click' color="success" onClick={() => alert('chip clicked!!')} />
      <Chip label='Delete' color="error" onDelete={() => alert('Deleted!!')} />
        {
            chips.map(chip => (
                <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
            ))
        }
    </Stack>
  );
}

export default MUIChip