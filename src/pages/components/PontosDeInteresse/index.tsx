import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  ContentPontos,
  Item,
  Itens,
  Mapa,
} from "./styles";
import { Download, CircleCheck } from "lucide-react";
import { useTheme } from "../../ThemeContext";
import { pontos } from "./pontos";

interface PontosDeInteresseProps {
  empreendimento?: string;
  empreendimentoPonto?: any;
}

export function PontosDeInteresse({
  empreendimentoPonto,
}: PontosDeInteresseProps) {
  const theme = useTheme();
  return (
    <Container id="apresentacao">
      <Content theme={theme}>
        <h1>
          Pontos importantes da <span>região</span>?
        </h1>

        <ContentPontos>
          <Mapa>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8774.343926185096!2d-47.59447328613215!3d-22.385431375678042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7db95af21d0f9%3A0x58e1cc85ed62088f!2sCondom%C3%ADnio%20Residencial%20Di%20Napoli%20I!5e0!3m2!1spt-BR!2sbr!4v1710445587157!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Mapa>
          <Itens>
            {pontos?.[empreendimentoPonto].map((item: any) => {
              return (
                <Item>
                  <CircleCheck color={theme.primaryColor} strokeWidth={2.5} />
                  <span>{item}</span>
                </Item>
              );
            })}
          </Itens>
        </ContentPontos>
      </Content>
    </Container>
  );
}
