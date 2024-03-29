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
  TextImg,
} from "./styles";
import { useTheme } from "../../../ThemeContext";
import { X } from "lucide-react";
import { ModalEmpreendimentos } from "../ModalEmpreendimentos";

interface CardEmpreendimentoProps {
  title?: string;
  preco?: string;
  list?: ReactNode;
  type?: string;
  linkButton?: string;
  img?: string;
  imgModal?: string;
}

export function CardEmpreendimento({
  title,
  preco,
  img,
  imgModal,
  type,
  linkButton,
}: CardEmpreendimentoProps) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const openModal = (imgModal: any) => {
    setIsOpen(true);
    setModalImg(imgModal);
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
        <ImageBox onClick={() => openModal(imgModal)}>
          <img src={img} />
          <TextImg>
            <span>Clique e saiba +</span>
          </TextImg>
        </ImageBox>
      </Content>
      <ContentButton>
        <ButtonCard href={linkButton} target="_blank" theme={theme}>
          Quero esse!
        </ButtonCard>
      </ContentButton>
      {isOpen && (
        // <ModalWrapper onClick={handleOutsideClick}>
        //   <ModalContent>
        //     <CloseButton onClick={closeModal}>
        //       <X size={24} />
        //     </CloseButton>
        //     <img src={modalImg} alt="Modal Image" />
        //   </ModalContent>
        // </ModalWrapper>
        <ModalEmpreendimentos
          onClickModal={handleOutsideClick}
          onClickClose={closeModal}
        >
          <img src={modalImg} alt="Modal Image" />
        </ModalEmpreendimentos>
      )}
    </Container>
  );
}
