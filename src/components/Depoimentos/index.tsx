import { ReactNode } from "react";

import {
  Column,
  Container,
  Content,
  FlexContent,
  TestemonialCard,
} from "./styles";

export function Depoimentos() {
  return (
    <Container id="depoimentos">
      <Content>
        <h1>Depoimentos</h1>
        <FlexContent>
          <Column>
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
          </Column>
        </FlexContent>
      </Content>
    </Container>
  );
}
