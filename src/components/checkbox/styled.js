import styled from "styled-components";

export const StyledCheck = styled.div`
  width: 15px;
  height: 15px;
  outline: none;
  margin-bottom: 0px;
  border: 1px solid lightgrey;
  border-radius: 0;
  box-sizing: border-box;
  transition: 0.5s;
  display: block;

  :focus {
    border-color: #3351a3;
    box-shadow: 0 0 8px 0 #3351a3;
  }

  :hover {
    border-color: #3351a3;
    box-shadow: 0 0 8px 0 #3351a3;
  }
`;
