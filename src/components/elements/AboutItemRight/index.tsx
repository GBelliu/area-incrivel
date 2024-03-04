import { ReactNode } from "react";

import { Container, LeftContent, RightContent } from "./styles";

interface AboutItemRight {
  children: ReactNode;
}

export function AboutItemRight() {
  return (
    <Container>
      <LeftContent></LeftContent>
      <RightContent></RightContent>
    </Container>
  );
}
