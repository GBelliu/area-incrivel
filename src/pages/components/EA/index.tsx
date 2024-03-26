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
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492233/public/logoea_rb4ovb.png"
              alt=""
            />
          </LeftContent>
          <RightContent>
            <Text theme={theme}>
              <h2>
                Garantia de <span>desconto</span> na Energia Amiga
              </h2>
              <p>
                O condomínio oferece diferenciais ambientais, alinhados às novas
                práticas de sustentabilidade, sendo um deles a geração de
                energia solar limpa e renovável, por meio da parceria com a
                empresa Energia Amiga, que também compõe o Grupo MNGT.
              </p>
            </Text>
            <Button>Garantir esse benefício</Button>
          </RightContent>
        </ContentEA>
      </Content>
    </Container>
  );
}
