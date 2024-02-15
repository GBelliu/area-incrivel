import { ReactNode } from 'react';

import { Container } from './styles';

interface DiNapoliIProps {
  children: ReactNode;
}

export function DiNapoliI({ children }: DiNapoliIProps) {
  return (
    <Container>
      <h1>DiNapoliI</h1>
      {children}
    </Container>
  );
}
