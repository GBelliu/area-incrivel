import { ReactNode, useState } from "react";

import {
  ButtonCard,
  CloseButton,
  Container,
  Content,
  ContentButton,
  ContentHeader,
  ContentTextInfo,
  Divider,
  ImageBox,
  ModalContent,
  ModalWrapper,
} from "./styles";
import { useTheme } from "../../../ThemeContext";
import { X } from "lucide-react";

interface CardEmpreendimentoProps {
  title?: string;
  preco?: string;
  list?: ReactNode;
  type?: string;
  linkButton?: string;
  img?: string;
}

export function CardEmpreendimento({
  title,
  preco,
  img,
  type,
  linkButton,
}: CardEmpreendimentoProps) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const openModal = (img: any) => {
    setIsOpen(true);
    setModalImg(img);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <Container type={type}>
      <ContentHeader theme={theme}>
        <h2>{title}</h2>
      </ContentHeader>
      <Content>
        <ContentTextInfo>
          <span>parcelas mensais a partir de</span>
          <h3>{preco}</h3>
          <p>SAIBA MAIS SOBRE ESSA OPÇÃO</p>
        </ContentTextInfo>
        <Divider theme={theme} />

        <img src={img} onClick={() => openModal(img)}></img>
      </Content>
      <ContentButton>
        <ButtonCard href={linkButton} theme={theme}>
          Quero esse!
        </ButtonCard>
      </ContentButton>
      {isOpen && (
        <ModalWrapper onClick={handleOutsideClick}>
          <ModalContent>
            <CloseButton onClick={closeModal}>
              <X size={24} />
            </CloseButton>
            <img src={modalImg} alt="Modal Image" />
          </ModalContent>
        </ModalWrapper>
      )}
    </Container>
  );
}
