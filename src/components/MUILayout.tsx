import { Box, Stack, Divider, Grid } from "@mui/material"

const MUILayout = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid" }}
        direction={"row"}
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "pink",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Material UI
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          CSS Utility
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>Item1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>Item2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>Item3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>Item4</Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MUILayout;