import React from "react";
import { Button } from "./../button";
import { StyledSection } from "./styled";

export default function index({ options }) {
  return (
    <StyledSection>
      {options.map((el) => {
        return <Button key={"menu" + el.value} text={el.value} onClick={() => el.event(el.value)} />;
      })}
    </StyledSection>
  );
}
