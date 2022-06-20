import styled from "styled-components";
import backImg from "./../../assets/images/background.jpg";

export const Background = styled.div`
  height: 100% !important;
  background-image: url(${backImg});
  background-color: #03a5b4;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
`;

export const LogoBlock = styled.div`
  margin: auto;
  max-width: 500px;
  padding: 4rem 1rem 1rem 1rem;
  text-align: center;
  color: black;
`;

export const LoginBlock = styled.div`
  margin: auto;
  max-width: 500px;
  padding: 2rem;
  border: 1px lightgrey solid;
`;

export const InputBlock = styled.div`
  text-align: center;
`;

export const SubmitBlock = styled.div`
  text-align: center;
`;
