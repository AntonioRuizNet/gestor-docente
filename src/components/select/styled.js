import styled from "styled-components";

export const StyledSelect = styled.select`
  font-family: "Segoe UI" !important;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  outline: none;
  border: 1.5px solid lightgrey;
  box-sizing: border-box;
  transition: 0.5s;
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 3px;
  :focus {
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: lightgrey;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: lightgrey;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: lightgrey;
  }
`;
