import { ReactNode } from "react";

import { Container, LeftContent, RightContent } from "./styles";

interface AboutItemRight {
  img: string;
  title: string;
  paragraph: string;
}

export function AboutItemRight({ img, title, paragraph }: AboutItemRight) {
  return (
    <Container>
      <LeftContent>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </LeftContent>
      <RightContent>
        <img src={img} alt="" />
      </RightContent>
    </Container>
  );
}
