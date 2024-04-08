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
  mockupImgInsta?: string;
  mockupImgFace?: string;
}

export function Redes({
  instagram,
  facebook,
  mockupImgInsta,
  mockupImgFace,
}: RedesProps) {
  const theme = useTheme();
  return (
    <Container id="redes">
      <Content theme={theme}>
        <h1>
          Confira nossas <span>redes sociais</span>
        </h1>

        <ContentRedes>
          <Mockup>
            <img src={mockupImgInsta} alt="" />
          </Mockup>
          <Social>
            <Instagram>
              <Icon>
                <img
                  src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492221/public/instalogo_hv7iob.png"
                  alt=""
                />
              </Icon>
              <Text>
                <h2>Siga nosso Insta - @dinapoli.i</h2>
              </Text>
              <a href={instagram} target="_blank">
                <Button>Ver perfil</Button>
              </a>
            </Instagram>
            <Facebook>
              <Icon>
                <img
                  src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492199/public/facelogo_ktfypu.png"
                  alt=""
                />
              </Icon>
              <Text>
                <h2>Acompanhe nosso Face - Di Napoli I</h2>
              </Text>
              <a href={facebook} target="_blank">
                <Button rede="face">Ver perfil</Button>
              </a>
            </Facebook>
          </Social>
          <Mockup>
            <img src={mockupImgFace} alt="" />
          </Mockup>
        </ContentRedes>
      </Content>
    </Container>
  );
}
