import { ReactNode } from "react";

import {
  Container,
  Name,
  PersonDetails,
  ProfileDescription,
  ProfileImage,
  Sub,
  Text,
} from "./styles";
import { useTheme } from "../../../ThemeContext";

interface CardDepoimentosProps {
  text: string;
  imgDepoimento?: string;
  nameDepoimento: string;
  subDepoimento: string;
}

export function CardDepoimentos({
  text,
  imgDepoimento,
  nameDepoimento,
  subDepoimento,
}: CardDepoimentosProps) {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      <Text>"{text}"</Text>
      <PersonDetails>
        <ProfileImage>
          <img src={imgDepoimento} alt="" />
        </ProfileImage>
        <ProfileDescription>
          <Name>{nameDepoimento}</Name>
          <Sub>{subDepoimento}</Sub>
        </ProfileDescription>
      </PersonDetails>
    </Container>
  );
}
