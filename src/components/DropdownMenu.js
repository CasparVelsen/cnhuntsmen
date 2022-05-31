import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function DropdownMenu({ active }) {
  console.log(active);
  return (
    <>
      <Nav active={active}>
        <LinkStyled to="/">Homepage</LinkStyled>
        <LinkStyled to="/about">About</LinkStyled>
        <LinkStyled to="/portfolio">Portfolio</LinkStyled>
        <LinkStyled to="/contact">Contact</LinkStyled>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;

  ${({ active = false }) =>
    !active &&
    css`
      display: none;
    `};

  @media (min-width: 600px) {
    display: none;
  }
`;

const LinkStyled = styled(NavLink)`
  width: fit-content;
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: white;
  padding: 10px;

  &.active {
    border-bottom: 2px solid white;
  }
`;
