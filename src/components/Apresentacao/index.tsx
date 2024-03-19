import { ReactNode } from "react";

import { Button, Container, Content, Video, Text } from "./styles";
import { Download } from "lucide-react";

export function Apresentacao() {
  return (
    <Container id="apresentacao">
      <Content>
        <Video>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/-2bUkkL6CX8"
            title="Apresentação do Centro Logístico Rio Claro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Video>
        <Text>
          <h1>Sobre a Área Incrível</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            necessitatibus corporis soluta molestiae maiores porro eaque. Ullam,
            accusantium. Ex quia eligendi, qui debitis ut est hic ea
            necessitatibus fugit error.
          </p>
          <Button>
            <Download size={20} color="#FFF" />
            Baixar apresentação
          </Button>
        </Text>
      </Content>
    </Container>
  );
}
