import styled from "styled-components";

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  text-decoration: none;
  transition: all 0.4s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-right: 5px;
  height: 38px;

  :focus,
  :hover {
    color: #05a5b4;
    background-color: #ffffff;
    border: 1px white solid;
  }

  :active {
    border-color: #fff;
    color: #fff;
    fill: #fff;
  }
`;
