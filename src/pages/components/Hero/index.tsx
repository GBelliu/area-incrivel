import { ReactNode } from "react";
import {
  ButtonHero,
  Category,
  Container,
  Content,
  ContentSocial,
  ContentText,
  Value,
  Text,
} from "./styles";
import { ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

interface HeroProps {
  image?: string;
  category?: string;
  subname?: string;
  name?: string;
  description?: string;
  value?: string;
  buttonLink?: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
}

export function Hero({
  image,
  category,
  subname,
  name,
  description,
  value,
  buttonLink,
  whatsapp,
  instagram,
  facebook,
}: HeroProps) {
  return (
    <Container>
      <img src={image} alt="" />
      <Content>
        <ContentText>
          <Category>{category}</Category>
          <Text>
            <span>{subname}</span>
            <h1>{name}</h1>
          </Text>

          <Value>
            <h2>{description}</h2>
            <h2>A partir de:</h2>
            <h3>R${value}</h3>
          </Value>

          <a href={buttonLink}>
            <ButtonHero>Tenho interesse!</ButtonHero>
          </a>
        </ContentText>
        <ContentSocial>
          <div>
            <a href={whatsapp}>
              <img src="whatsapp.svg" alt="" />
            </a>
          </div>
          <div>
            <a href={instagram}>
              <img src="instagram.svg" alt="" />
            </a>
          </div>
          <div>
            <a href={facebook}>
              <img src="facebook.svg" alt="" />
            </a>
          </div>
        </ContentSocial>
      </Content>
    </Container>
  );
}
