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
            Nós, da Área Incrível, somos uma incorporadora que integra o grupo
            MNGT, com sede em Rio Claro (SP). Nosso compromisso é sempre pensar
            no consumidor, buscando construir casas acessíveis e de qualidade.
            Além disso, priorizamos a automação e a aplicação de tecnologia em
            nossos projetos, visando proporcionar experiências residenciais
            inovadoras e confortáveis para todos os nossos clientes.
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
