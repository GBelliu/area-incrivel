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
  Video,
} from "./styles";

interface RedesProps {
  instagram?: string;
  facebook?: string;
}

export function Redes({ instagram, facebook }: RedesProps) {
  return (
    <Container id="redes">
      <Content>
        <h1>
          Confira nossas <span>redes sociais</span>
        </h1>

        <ContentRedes>
          <Mockup>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492224/public/iphonemockup_zz8x54.png"
              alt=""
            />
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
                <h2>Siga nosso Insta - @area.incrivel</h2>
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
                <h2>Acompanhe nosso Face - Área IncrívelI</h2>
              </Text>
              <a href={facebook}>
                <Button rede="face">Ver perfil</Button>
              </a>
            </Facebook>
          </Social>
        </ContentRedes>
        <Video>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/LwuLEmqY1Xc"
            title="Como é a vida no Recanto Paraiso em Rio Claro - SP?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Video>
      </Content>
    </Container>
  );
}
