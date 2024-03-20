import { ReactNode } from "react";

import { Container, LeftContent, RightContent } from "./styles";

interface AboutItemRight {
  number: string;
  title: string;
  paragraph: string;
}

export function AboutItemRight({ number, title, paragraph }: AboutItemRight) {
  return (
    <Container>
      <LeftContent>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </LeftContent>
      <RightContent>
        <span>{number}</span>
      </RightContent>
    </Container>
  );
}
