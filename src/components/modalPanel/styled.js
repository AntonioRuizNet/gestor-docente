import styled from "styled-components";

export const Overlay = styled.div`
  display: block;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
  overflow: hidden;
  outline: 0;
  background-color: #0000006b;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-animation-name: growIn;
  animation-name: growIn;
  -webkit-animation-duration: 0.2s;
  animation-duration: 0.2s;
  -webkit-animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
  animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
`;

export const ContainerBlock = styled.div`
  max-width: 650px;
  margin: 1.75rem auto;
  //margin-left: 28%;
  margin-top: 7%;
  position: relative;

  @media only screen and (min-width: 768px) {
    position: relative;
    width: auto;
  }
`;

export const PanelBlock = styled.div`
  z-index: 200;
  background-color: white;
  padding: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
`;

export const HeaderPanelBlock = styled.div`
  z-index: 200;
  text-align: right;
  cursor: pointer;
  color: darkred;
  font-size: 20px;
  position: absolute;
  right: 2%;
  top: 1%;
`;

/*export const Title = styled.span`
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem;
  font-weight: 500;
  line-height: 1.2;
`;*/
