
import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

const MUIAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This an error alert</Alert>
      <Alert severity="warning">This an warning alert</Alert>
      <Alert severity="info">This an info alert</Alert>
      <Alert severity="success">This an success alert</Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This an warning alert <AlertTitle>Warning</AlertTitle>
      </Alert>
      <Alert variant="outlined" severity="info">
        This an info alert <AlertTitle>Info</AlertTitle>
      </Alert>
      <Alert variant="outlined" severity="success">
        This an success alert <AlertTitle>Success</AlertTitle>
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert!!")}
      >
        This an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        This an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
            <Button color='inherit' size='small'>Undo</Button>
        }
      >
        This an success alert
      </Alert>
    </Stack>
  );
}

export default MUIAlert