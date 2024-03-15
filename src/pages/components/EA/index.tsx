import {
  Button,
  Container,
  Content,
  ContentEA,
  LeftContent,
  RightContent,
  Text,
} from "./styles";
import { useTheme } from "../../ThemeContext";

export function EA() {
  const theme = useTheme();
  return (
    <Container>
      <Content>
        <h1>Área Incrível 🤝 Energia Amiga</h1>
        <ContentEA>
          <LeftContent>
            <img src="logoea.png" alt="" />
          </LeftContent>
          <RightContent>
            <Text theme={theme}>
              <h2>
                Garantia de <span>desconto</span> na Energia Amiga
              </h2>
              <p>
                Com previsão de instalação de 450 usinas solares apenas em 2024,
                a Energia Amiga tem um modelo de negócio focado em tornar o
                mundo mais saudável, protegendo os recursos naturais e reduzindo
                a emissão de CO², ao mesmo tempo que gera economias
                significativas para seus clientes.
              </p>
            </Text>
            <Button>Garantir esse benefício</Button>
          </RightContent>
        </ContentEA>
      </Content>
    </Container>
  );
}
