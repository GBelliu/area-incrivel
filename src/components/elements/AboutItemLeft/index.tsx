import { ReactNode } from "react";

import { Container, LeftContent, RightContent } from "./styles";

interface AboutItemLeft {
  img: string;
  title: string;
  paragraph: string;
}

export function AboutItemLeft({ img, title, paragraph }: AboutItemLeft) {
  return (
    <Container>
      <LeftContent>
        <img src={img} alt="" />
      </LeftContent>
      <RightContent>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </RightContent>
    </Container>
  );
}
