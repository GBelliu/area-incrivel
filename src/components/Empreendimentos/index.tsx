import { ReactNode } from 'react';

import { Container } from './styles';

interface EmpreendimentosProps {
  children: ReactNode;
}

export function Empreendimentos({ children }: EmpreendimentosProps) {
  return (
    <Container>
      <h1>Empreendimentos</h1>
      {children}
    </Container>
  );
}
