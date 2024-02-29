import { ReactNode } from "react";

import { Container } from "./styles";

interface LotesProps {
  children: ReactNode;
}

export function Lotes({ children }: LotesProps) {
  return (
    <Container>
      <h1>Lotes</h1>
      {children}
    </Container>
  );
}
