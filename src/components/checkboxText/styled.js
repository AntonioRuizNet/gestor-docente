import styled from "styled-components";

export const StyledInput = styled.input`
  width: 25px;
  height: 25px;
  display: inline;
  margin-right: 5px;
  outline: none;
  margin-bottom: 10px;
  border: 2px solid lightgrey;
  border-radius: 0;
  box-sizing: border-box;
  transition: 0.5s;
  padding: 0.375rem 0.75rem;
  vertical-align: middle;

  :focus {
    border-color: #3351a3;
    box-shadow: 0 0 8px 0 #3351a3;
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
