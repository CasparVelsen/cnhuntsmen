import { Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import styled from 'styled-components';

function App() {
  return (
    <>
      <header>
        <div>Logo</div>
        <Navigation />
      </header>
      <main>
        <Content>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Content>
        <footer>Footer</footer>
      </main>
    </>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 20px;
`;

export default App;
