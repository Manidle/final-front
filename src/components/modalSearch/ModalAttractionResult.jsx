import {
  Box,
  Button,
  Container,
  createTheme,
  ListItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ModalAttractionResult = () => {
  const theme = createTheme({
    palette: {
      primary: {
        // 가장 어두운 보라
        main: "#52057B",
      },
      secondary: {
        // 가장 밝은 보라
        main: "#BC6FF1",
      },
      info: {
        // 중간 보라
        main: "#892CDC",
      },
    },
  });

  // attraction 리스트
  const [attractionLists, setAttractionLists] = useState([]);

  // attraction 전체 조회
  function searchAttractionAll() {
    axios
      .get("http://localhost:8080/api/auth/v1/list/attraction", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        setAttractionLists(response.data);
        console.log(attractionLists);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    searchAttractionAll();
  }, []);

  // attraction 검색어
  const [searchWord, setSearchWord] = useState("");

  // attraction 검색 조회
  function searchAttraction() {
    axios
      .get(
        `http://localhost:8080/api/filter/attraction/search?search=${searchWord}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        setAttractionLists(response.data);
        console.log(attractionLists);
      });
  }

  function listClick(attractionList) {
    console.log(attractionList);
    sessionStorage.setItem("attractionData", JSON.stringify(attractionList));
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box className="modalSearch">
          <TextField
            placeholder="관광지를 검색하세요"
            size="small"
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <Button
            className="attractionSearchButton"
            onClick={() => {
              searchAttraction();
            }}
          >
            검색
          </Button>
        </Box>
        <Box maxHeight="32vh" margin="5px" overflow="auto">
          {attractionLists.length === 0 ? (
            <Box>관광지가 없습니다.</Box>
          ) : (
            attractionLists.map((attractionList) => (
              <ListItem
                display="flex"
                justifyContent="space-between"
                key={attractionList.attractionId}
                onClick={() => {
                  listClick(attractionList);
                }}
              >
                <Typography>관광지 이름:{attractionList.name}</Typography>
                <Typography>관광지 주소:{attractionList.address}</Typography>
                <Typography>
                  관광지 설명: 관광지에 대한 설명 attractionList.description 이
                  들어갈겁니다.
                </Typography>
                <Typography>좋아요 수:{attractionList.likeCount}</Typography>
              </ListItem>
            ))
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ModalAttractionResult;