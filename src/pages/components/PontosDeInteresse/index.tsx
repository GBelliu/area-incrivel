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
import { pontos } from "../../utils/pontos";

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
              src={pontos?.[empreendimentoPonto]?.loc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Mapa>
          <Itens>
            {pontos?.[empreendimentoPonto].list.map((item: any) => {
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
