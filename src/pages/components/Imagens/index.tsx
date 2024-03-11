import { ReactNode } from 'react';

import { Container } from './styles';

interface ImagensProps {
  children: ReactNode;
}

export function Imagens({ children }: ImagensProps) {
  return (
    <Container>
      <h1>Imagens</h1>
      {children}
    </Container>
  );
}
