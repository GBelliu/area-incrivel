import { ReactNode } from "react";
import {
  ButtonHero,
  Category,
  Container,
  Content,
  ContentSocial,
  ContentText,
  Value,
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
          <span>{subname}</span>
          <h1>{name}</h1>
          <h2>{description}</h2>

          {value && (
            <Value>
              <h2>A partir de:</h2>
              <h3>R${value}</h3>
            </Value>
          )}

          <a href={buttonLink}>
            <ButtonHero>Tenho interesse!</ButtonHero>
          </a>
        </ContentText>
        <ContentSocial>
          {whatsapp && (
            <a href={whatsapp}>
              <img src="whatsapp.svg" alt="" />
            </a>
          )}
          {instagram && (
            <a href={instagram}>
              <img src="instagram.svg" alt="" />
            </a>
          )}
          {facebook && (
            <a href={facebook}>
              <img src="facebook.svg" alt="" />
            </a>
          )}
        </ContentSocial>
      </Content>
    </Container>
  );
}
