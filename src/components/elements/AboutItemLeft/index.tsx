import { ReactNode } from "react";

import { Container, LeftContent, RightContent } from "./styles";

interface AboutItemLeft {
  children: ReactNode;
}

export function AboutItemLeft() {
  return (
    <Container>
      <LeftContent></LeftContent>
      <RightContent></RightContent>
    </Container>
  );
}
