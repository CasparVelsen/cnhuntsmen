import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Nav>
      <LinkStyled to="/">Homepage</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/portfolio">Portfolio</LinkStyled>
      <LinkStyled to="/contact">Contact</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LinkStyled = styled(NavLink)`
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  padding: 5px;

  &.active {
    border-bottom: 1px solid white;
  }
`;
