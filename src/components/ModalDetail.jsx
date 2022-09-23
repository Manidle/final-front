import { Box, Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import ModalAttractionResult from './modalSearch/ModalAttractionResult';
import ModalRentcarResult from './modalSearch/ModalRentcarResult';
import ModalStayResult from './modalSearch/ModalStayResult';
import ModalTrainResult from './modalSearch/ModalTrainResult';

const ModalDetail = ({currentCategory}) => {
    const theme = createTheme({
        palette: {
            primary: {
                // 가장 어두운 보라
            main: '#52057B',
            },
            secondary: {
                // 가장 밝은 보라
            main: '#BC6FF1',
            },
            info:{
                // 중간 보라
                main: '#892CDC',
            },
        },
    });

  return (
    <ThemeProvider theme={theme}>
        {currentCategory === 'stay' ?
            <Box>
                <Typography>stay</Typography>
                <ModalStayResult />
            </Box> :
            (
                currentCategory === 'attraction' ?
                <Box >
                    <Typography>attraction</Typography>
                    <ModalAttractionResult/>
                </Box> :
                (
                    currentCategory === 'train' ?
                    <Box >
                        <Typography>train</Typography>
                        <ModalTrainResult/>
                    </Box> :
                    (
                        <Box >
                            <Typography>rentcar</Typography>
                            <ModalRentcarResult/>
                        </Box>
                    )
                )
            )
        }
    </ThemeProvider>
  )
}

export default ModalDetail