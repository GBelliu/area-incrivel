import { ReactNode } from "react";

import {
  Column,
  Container,
  Content,
  FlexContent,
  Iframe,
  TestemonialCard,
} from "./styles";

export function Depoimentos() {
  return (
    <Container id="depoimentos">
      <Content>
        <h1>Depoimentos</h1>
        <FlexContent>
          {/* <Column>
            <TestemonialCard>
              <img src="depo1.png" alt="" />
            </TestemonialCard>
            <TestemonialCard>
              <img src="depo3.png" alt="" />
            </TestemonialCard>
          </Column>
          <Column>
            <TestemonialCard>
              <img src="depo2.png" alt="" />
            </TestemonialCard>
            <TestemonialCard>
              <img src="depo4.png" alt="" />
            </TestemonialCard>
          </Column>
          <Column>
            <TestemonialCard>
              <img src="depo5.png" alt="" />
            </TestemonialCard>
            <TestemonialCard>
              <img src="depo6.png" alt="" />
            </TestemonialCard>
          </Column> */}
          <Iframe>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/VlG1ZN_yhVg"
              title="Amanda adquiriu a casa própria com a Área Incrível"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Iframe>
          <Iframe>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/xMrwRdLJuIY"
              title="Filipe e Yara adquiriram a casa própria com a Área Incrível"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Iframe>
          <Iframe>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/olTY2WLHaAA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Iframe>
          <Iframe>
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/kfIll4lyCF0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Iframe>
        </FlexContent>
      </Content>
    </Container>
  );
}
