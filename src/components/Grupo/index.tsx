import { ReactNode } from 'react';

import { Container } from './styles';

interface GrupoProps {
  children: ReactNode;
}

export function Grupo({ children }: GrupoProps) {
  return (
    <Container>
      <h1>Grupo</h1>
      {children}
    </Container>
  );
}
