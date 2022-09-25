import React from "react";
import Featured from "../../components/featured/Featured";
import Searchbar from "../../components/searchbar/Searchbar";
import HotPost from "../../components/hotpost/HotPost";
import Footer from "../../components/footer/Footer";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "../../components/header/Header";
import HotArticle from "../../components/hotarticle/HotArticle";
import HotAttraction from "../../components/hotattraction/HotAttraction";
import Wrapper from "./Wrapper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = createTheme;

  const navigate = useNavigate();
  const handleRoute = (props) => {
    navigate(`/${props}`);
  };

  return (
    <Container maxWidth="lg">
      <Header />
      <div className="homeContainer">
        <Featured />
        <Wrapper
          title="HOT POST"
          linkHandler={() => {
            handleRoute("board");
          }}
        >
          <HotArticle />
        </Wrapper>
        <Wrapper
          title="HOT ATTRACTION"
          linkHandler={() => {
            handleRoute("search/attraction");
          }}
        >
          <HotAttraction />
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
