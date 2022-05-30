import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  background-color: #f8f9fc;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  color: #858796;
  text-align: left;
`;

export const TitleSidebar = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  padding-bottom: 10px;
`;

export const Separador = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

export const OptionMenuV2 = styled.div`
  color: rgba(255, 255, 255, 0.8);
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.6rem;
  width: 14rem;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: white;
  }
`;

export const BackgroundSidebar = styled.div`
  width: 10%;
  min-width: 80px;
  padding: 1%;
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe 100%);
  background-size: cover;
  min-height: 100vh;
`;

export const BackgroundBody = styled.div`
  padding: 1% 1% 1% 3%;
  width: 85vw;
`;
