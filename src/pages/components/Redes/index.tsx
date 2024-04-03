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
  mockupImg?: string;
}

export function Redes({ instagram, facebook, mockupImg }: RedesProps) {
  const theme = useTheme();
  return (
    <Container id="redes">
      <Content theme={theme}>
        <h1>
          Confira nossas <span>redes sociais</span>
        </h1>

        <ContentRedes>
          <Mockup>
            <img src={mockupImg} alt="" />
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
              <a href={facebook}>
                <Button rede="face">Ver perfil</Button>
              </a>
            </Facebook>
          </Social>
          <Mockup>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1712167494/dn1/facedn1mockup_rsebyl.png"
              alt=""
            />
          </Mockup>
        </ContentRedes>
      </Content>
    </Container>
  );
}
