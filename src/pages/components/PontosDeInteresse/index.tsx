import { ReactNode } from "react";

import {
  Button,
  Container,
  Content,
  ContentPontos,
  Item,
  Itens,
  Mapa,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
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
        <p>
          Você e sua família terão acesso a toda estrutura do bairro, que conta
          com rede de comércio, saúde e educação diversificada, garantindo
          qualidade de vida e serviços na porta de casa.
        </p>
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
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Estabelecimento</TableHeader>
                    <TableHeader>Quantidade</TableHeader>
                    <TableHeader>Mais Próximo</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {pontos?.[empreendimentoPonto].list.map((item: any) => {
                    return (
                      <TableRow theme={theme}>
                        <TableCell>{item.estabelecimento}</TableCell>
                        <TableCell>{item.qtd}</TableCell>
                        <TableCell>{item.prox}</TableCell>
                      </TableRow>
                    );
                  })}
                </tbody>
              </Table>
            </TableContainer>
            <p>*Pesquisa feita em um raio de aproximadamente 4 km.</p>
          </Itens>
        </ContentPontos>
        <a
          href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20I"
          target="_blank"
        >
          <Button theme={theme}>Quero conhecer mais sobre o bairro</Button>
        </a>
      </Content>
    </Container>
  );
}
