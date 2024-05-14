import { Button, Stack } from "@mui/material"

const MUIButton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Button variant="text" href="https://react.dev">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
  )
}

export default MUIButton