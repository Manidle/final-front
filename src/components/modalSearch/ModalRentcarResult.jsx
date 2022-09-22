import { Box, Button, Container, createTheme, ListItem, TextField, ThemeProvider, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ModalRentcarResult = () => {
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

    // rentcar 리스트
    const [rentcarLists, setRentcarLists] = useState([])
    
    // rentcar 전체 조회
    function searchRentcarAll(){
        axios.get('http://localhost:8080/api/auth/v1/list/rentcar',{
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response)=>{
            setRentcarLists(response.data)
            console.log(rentcarLists);
        })
        .catch((error)=>{
            console.log(error.response);
        })
    }

    useEffect(()=>{
        searchRentcarAll()
    },[])

    // rentcar 검색어
    const [searchWord, setSearchWord] = useState("")

    // rentcar 검색 조회
    function searchRentcar(){
        axios.get(`http://localhost:8080/api/filter/list/rentcar?search=${searchWord}`,{
            headers: {
                'Authorization': `${localStorage.getItem('token')}`,
                "Content-Type": "application/json; charset=UTF-8",
            }
        })
        .then((response)=>{
            setRentcarLists(response.data)
            console.log(rentcarLists);
        })
    }

  return (
    <ThemeProvider theme={theme}>
        <Container>
            <Box className='modalSearch'>
                <TextField placeholder='렌트카를 검색하세요' onChange={(e)=>{setSearchWord(e.target.value)}}/>
                <Button className='rentcarSearchButton' onClick={()=>{searchRentcar()}}>검색</Button>
            </Box>
            <Box maxHeight='400px' backgroundColor='yellow' margin='5px' overflow='auto'>
                {rentcarLists.length === 0 ?
                    <Box>렌트카가 없습니다.</Box> :
                    rentcarLists.map((rentcarList)=>(
                        <ListItem display='flex' justifyContent='space-between' key={rentcarList.rentCarId}>
                            <Typography>렌트카 회사 이름: {rentcarList.companyName}</Typography>
                            <Typography>렌트카 주소 : {rentcarList.address}</Typography>
                            <Typography>렌트카 차 이름: {rentcarList.carName}</Typography>
                            <Typography>렌트카 차 종류: {rentcarList.carSort}</Typography>
                            <Typography>렌트카 좋아요 수: {rentcarList.likeCount}</Typography>
                        </ListItem>
                    ))
                }
            </Box>
        </Container>

    </ThemeProvider>
  )
}

export default ModalRentcarResult