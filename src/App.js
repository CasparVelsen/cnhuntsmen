import { Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import Hamburger from '../src/components/Hamburger';
import DropdownMenu from '../src/components/DropdownMenu';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import styled, { css } from 'styled-components';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);

  console.log(active);

  function toggleMenu() {
    setActive(!active);
  }

  return (
    <>
      <header>
        <div>Logo</div>
        <Navigation />
        <Hamburger toggleMenu={toggleMenu} active={active} />
      </header>
      <main>
        <DropdownMenu toggleMenu={toggleMenu} active={active} />
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Content>
        <MainDarken active={active}>something</MainDarken>
        <footer>Footer</footer>
      </main>
    </>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 20px;
`;

const MainDarken = styled.div`
  position: absolute;
  border: 1px solid black;
  height: 100%;
  width: 100vw;
  display: none;

  ${({ active }) =>
    active &&
    css`
      display: block;
      background-color: black;
      opacity: 0.75;
      z-index: 9998;
    `};
`;

export default App;
