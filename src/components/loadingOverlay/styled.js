import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.8;
`;

export const ContainerBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: #fff;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem;
  font-weight: 500;
  line-height: 1.2;
`;
