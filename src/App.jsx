import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDataProvider from "./Components/Provider/Provider";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import DropDown from './Components/DropDown/DropDown';
import Anime from "./Components/Anime/Anime";
import Manga from "./Components/Manga/Manga";
import About from "./Components/About us/AboutUs";
import Favorites from "./Components/Favorites/Favorites";

const GlobalStyle = createGlobalStyle`
  html, body {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: white;
    padding: 0;
    color: black;
    overflow-x: hidden;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 10vh; /* Assuming the header height is 10vh */
`;

const ContentWrapper = styled.div`
  margin-left: 15vw; /* Adjust according to DropDown width */
  flex: 1;
  padding: 20px;
`;

function App() {
  return (
    <Router>
      <MyDataProvider>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <MainContent>
            <DropDown />
            <ContentWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Manga" element={<Manga />} />
                <Route path="/Anime" element={<Anime />} />
                <Route path="/Favorites" element={<Favorites />} />
                <Route path="/About" element={<About />} />
              </Routes>
            </ContentWrapper>
          </MainContent>
          <Footer />
        </AppContainer>
      </MyDataProvider>
    </Router>
  );
}

export default App;
