import { Container, Content, ContentTop, ContentTextInfo } from "./styles";

interface CardPorqueProps {
  title?: string;
}

export function CardPorque({ title }: CardPorqueProps) {
  return (
    <Container>
      <ContentTop>a</ContentTop>
      <Content>
        <ContentTextInfo>
          <span>área incrível</span>
          <h2>{title}</h2>
        </ContentTextInfo>
      </Content>
    </Container>
  );
}
