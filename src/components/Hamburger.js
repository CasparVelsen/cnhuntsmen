import styled, { css } from 'styled-components';

export default function Hamburger({ toggleMenu, active }) {
  return (
    <Icon onClick={toggleMenu}>
      <One active={active} />
      <Two active={active} />
      <Three active={active} />
    </Icon>
  );
}

const Icon = styled.div`
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

const One = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin: 5px auto;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(8px) rotate(45deg);
    `};
`;

const Two = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin: 5px auto;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;

  ${({ active }) =>
    active &&
    css`
      opacity: 0;
    `};
`;

const Three = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin: 5px auto;
  border-radius: 3px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: white;

  ${({ active }) =>
    active &&
    css`
      transform: translateY(-8px) rotate(-45deg);
    `};
`;
