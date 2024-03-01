import { ReactNode } from "react";

import {
  Container,
  Content,
  Gallery,
  GridContent,
  HorizontalItem,
  SmallItem,
  VerticalItem,
} from "./styles";

export function Depoimentos() {
  return (
    <Container>
      <Content>
        <h1>Depoimentos</h1>
        <GridContent>
          <Gallery>
            <HorizontalItem></HorizontalItem>
            <SmallItem></SmallItem>
            <VerticalItem></VerticalItem>
            <SmallItem></SmallItem>
          </Gallery>
          <Gallery>
            <SmallItem></SmallItem>
            <VerticalItem></VerticalItem>
            <SmallItem></SmallItem>
            <HorizontalItem></HorizontalItem>
          </Gallery>
        </GridContent>
      </Content>
    </Container>
  );
}
