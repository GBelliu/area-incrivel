import { ReactNode } from 'react';

import { Container } from './styles';

interface HeroProps {
  children: ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <Container>
      <h1>Hero</h1>
      {children}
    </Container>
  );
}
