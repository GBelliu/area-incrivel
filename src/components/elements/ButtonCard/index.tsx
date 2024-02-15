import { ReactNode } from 'react';

import { Container } from './styles';

interface ButtonCardProps {
  children: ReactNode;
}

export function ButtonCard({ children }: ButtonCardProps) {
  return (
    <Container>
      <h1>ButtonCard</h1>
      {children}
    </Container>
  );
}
