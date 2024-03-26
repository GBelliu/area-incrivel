import { ReactNode } from "react";

import { Button, Container, Content, ContentApresentacao } from "./styles";
import { Download } from "lucide-react";
import { useTheme } from "../../ThemeContext";

interface ApresentacaoProps {
  iframe?: ReactNode;
  empreendimento?: string;
  apresentacao?: string;
}

export function Apresentacao({
  iframe,
  empreendimento,
  apresentacao,
}: ApresentacaoProps) {
  const theme = useTheme();
  return (
    <Container id="apresentacao">
      <Content theme={theme}>
        <h1>
          Porque escolher o <span>{empreendimento}</span>?
        </h1>

        <ContentApresentacao>
          {iframe}

          <Button href={apresentacao} target="_blank">
            <Download size={25} color="#FFF" />
            Baixar apresentação
          </Button>
        </ContentApresentacao>
      </Content>
    </Container>
  );
}
