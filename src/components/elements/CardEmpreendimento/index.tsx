import { ReactNode } from 'react';

import { Container } from './styles';

interface CardEmpreendimentoProps {
  children: ReactNode;
}

export function CardEmpreendimento({ children }: CardEmpreendimentoProps) {
  return (
    <Container>
      <h1>CardEmpreendimento</h1>
      {children}
    </Container>
  );
}
