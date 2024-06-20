
import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material'
import { useEffect, useState } from 'react';

const MUISkeleton = () => {
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 3000)
  }, [])
  return (
    // <Stack spacing={1} width={"250px"}>
    //   <Skeleton variant="text" animation={false} />
    //   <Skeleton variant="circular" width={40} height={40} animation="wave" />
    //   <Skeleton
    //     variant="rectangular"
    //     width={250}
    //     height={125}
    //     animation="wave"
    //   />
    // </Stack>

    <Box sx={{ width: '250px' }}>
        {
            loading ? (
                <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
            ) : (
                <img src='https://images.unsplash.com/photo-1718354668365-993c89903d7c?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width={256} height={144} />
            )
        }
        <Stack direction={'row'} spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
            {
                loading ? (
                    <Skeleton variant='circular' width={40} height={40} animation='wave' />
                ) : (
                    <Avatar>N</Avatar>
                )
            }
            <Stack sx={{ width: '80%' }}>
                {
                    loading ? (
                        <>
                          <Typography variant='body1'>
                            <Skeleton variant='text' width={'100%'} animation='wave' />
                          </Typography>
                          <Typography variant='body2'>
                            <Skeleton variant='text' width={'100%'} animation='wave' />
                          </Typography>
                        </>
                    ) : (
                        <Typography variant='body1'>React MUI</Typography>
                    )
                }
            </Stack>
        </Stack>
    </Box>
  );
}

export default MUISkeleton