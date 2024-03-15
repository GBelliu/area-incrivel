import { ReactNode } from "react";

import { Button, Container, Content, Content3D } from "./styles";
import { useTheme } from "../../ThemeContext";

interface ExploreProps {
  empreendimento?: string;
  iframe: ReactNode;
}

export function Explore({ empreendimento, iframe }: ExploreProps) {
  const theme = useTheme();
  return (
    <Container>
      <Content theme={theme}>
        <h1>
          Explore o decorado do <span>{empreendimento}</span>
        </h1>
        <Content3D>{iframe}</Content3D>
        <Button theme={theme}>Quero conhecer mais</Button>
      </Content>
    </Container>
  );
}
