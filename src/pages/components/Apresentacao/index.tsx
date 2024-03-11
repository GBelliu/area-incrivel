import { ReactNode } from "react";

import { Button, Container, Content } from "./styles";
import { Download } from "lucide-react";

interface ApresentacaoProps {
  iframe?: ReactNode;
}

export function Apresentacao({ iframe }: ApresentacaoProps) {
  return (
    <Container id="apresentacao">
      <Content>
        {iframe}
        <Button>
          <Download size={25} color="#FFF" />
          Baixar apresentação
        </Button>
      </Content>
    </Container>
  );
}
