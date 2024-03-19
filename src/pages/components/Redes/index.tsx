import {
  Container,
  Content,
  ContentRedes,
  Facebook,
  Instagram,
  Social,
  Mockup,
  Icon,
  Text,
  Button,
} from "./styles";
import { useTheme } from "../../ThemeContext";

interface RedesProps {
  instagram?: string;
  facebook?: string;
}

export function Redes({ instagram, facebook }: RedesProps) {
  const theme = useTheme();
  return (
    <Container id="apresentacao">
      <Content theme={theme}>
        <h1>
          Confira nossas <span>redes sociais</span>
        </h1>

        <ContentRedes>
          <Mockup>
            <img src="iphonemockup.png" alt="" />
          </Mockup>
          <Social>
            <Instagram>
              <Icon>
                <img src="./instalogo.png" alt="" />
              </Icon>
              <Text>
                <h2>Siga nosso Insta - @dinapoli.i</h2>
              </Text>
              <a href={instagram}>
                <Button>Ver perfil</Button>
              </a>
            </Instagram>
            <Facebook>
              <Icon>
                <img src="./facelogo.png" alt="" />
              </Icon>
              <Text>
                <h2>Acompanhe nosso Face - Di Napoli I</h2>
              </Text>
              <a href={facebook}>
                <Button>Ver perfil</Button>
              </a>
            </Facebook>
          </Social>
        </ContentRedes>
      </Content>
    </Container>
  );
}