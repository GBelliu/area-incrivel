import { ReactNode } from "react";

import { Container, LeftContent, RightContent } from "./styles";

interface AboutItemLeft {
  number: string;
  title: string;
  paragraph: string;
}

export function AboutItemLeft({ number, title, paragraph }: AboutItemLeft) {
  return (
    <Container>
      <LeftContent>
        <span>{number}</span>
      </LeftContent>
      <RightContent>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </RightContent>
    </Container>
  );
}
