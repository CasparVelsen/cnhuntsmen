import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function DropdownMenu({ toggleMenu, active }) {
  return (
    <>
      <Nav active={active}>
        <LinkStyled to="/" onClick={toggleMenu}>
          Homepage
        </LinkStyled>
        <LinkStyled to="/about" onClick={toggleMenu}>
          About
        </LinkStyled>
        <LinkStyled to="/portfolio" onClick={toggleMenu}>
          Portfolio
        </LinkStyled>
        <LinkStyled to="/contact" onClick={toggleMenu}>
          Contact
        </LinkStyled>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aaa;
  width: 100%;
  padding: 10px;
  z-index: 9999;

  ${({ active = false }) =>
    !active &&
    css`
      display: none;
    `};

  @media (min-width: 700px) {
    display: none;
  }
`;

const LinkStyled = styled(NavLink)`
  width: 30%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  padding: 10px;

  &.active {
    border-bottom: 2px solid white;
  }
`;
