import { Box } from "@mui/material"

const MUILayout = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: 'primary.main',
        color: 'pink',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover': {
            backgroundColor: 'primary.light'
        }
    }}>
        Material UI
    </Box>
    <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>
        CSS Utility
    </Box>
    </>
  )
}

export default MUILayout;