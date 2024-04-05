import { ReactNode } from "react";

import {
  Container,
  Iframe,
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
  // imgDepoimento?: string;
  nameDepoimento: string;
  subDepoimento?: string;
  iframe?: ReactNode;
}

export function CardDepoimentos({
  text,
  // imgDepoimento,
  nameDepoimento,
  subDepoimento,
  iframe,
}: CardDepoimentosProps) {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      <Iframe>{iframe}</Iframe>
      <Text>{text}</Text>
      <PersonDetails>
        {/* <ProfileImage>
          {imgDepoimento ? (
            <img src={imgDepoimento} alt="" />
          ) : (
            <img src="profile.png" alt="" />
          )}
        </ProfileImage> */}
        <ProfileDescription>
          <Name>{nameDepoimento}</Name>
          <Sub>{subDepoimento}</Sub>
        </ProfileDescription>
      </PersonDetails>
    </Container>
  );
}
