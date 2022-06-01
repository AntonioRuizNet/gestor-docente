import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  width: 100%;
  outline: none;
  margin-bottom: 1.5rem;
  border: 2px solid lightgrey;
  border-radius: 0;
  box-sizing: border-box;
  transition: 0.5s;
  display: block;
  padding: 0.375rem 0.75rem;

  :focus {
    border-color: grey;
    box-shadow: 0 0 8px 0 grey;
  }
`;
