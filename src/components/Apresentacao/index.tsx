import { ReactNode } from "react";

import { Button, Container, Content } from "./styles";
import { Download } from "lucide-react";

export function Apresentacao() {
  return (
    <Container id="apresentacao">
      <Content>
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/-2bUkkL6CX8"
          title="Apresentação do Centro Logístico Rio Claro"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Button>
          <Download size={25} color="#FFF" />
          Baixar apresentação
        </Button>
      </Content>
    </Container>
  );
}
