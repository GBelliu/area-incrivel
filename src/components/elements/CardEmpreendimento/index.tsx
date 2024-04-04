import { ReactNode, useState } from "react";

import {
  ButtonCard,
  Container,
  Content,
  ContentButton,
  ContentHeader,
  ContentTextInfo,
  Divider,
  ImageBox,
  TextImg,
} from "./styles";
import { ModalEmpreendimentos } from "../../../pages/components/elements/ModalEmpreendimentos";

interface CardEmpreendimentoProps {
  title?: ReactNode;
  preco?: string;
  list?: ReactNode;
  type?: string;
  linkButton?: string;
  imgModal?: string;
  img?: string;
}

export function CardEmpreendimento({
  title,
  preco,
  imgModal,
  img,
  type,
  linkButton,
}: CardEmpreendimentoProps) {
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
      <ContentHeader>{title}</ContentHeader>
      <Content>
        <ContentTextInfo>
          <span>parcelas mensais médias a partir de</span>
          <h3>{preco}</h3>
          <p>SAIBA MAIS SOBRE AS OPÇÕES</p>
        </ContentTextInfo>
        <Divider />
        {img && (
          <ImageBox onClick={() => openModal(imgModal)}>
            <img src={img} />
            <TextImg>
              <span>Clique e saiba +</span>
            </TextImg>
          </ImageBox>
        )}
      </Content>
      <ContentButton>
        <ButtonCard href={linkButton} target="_blank">
          Saber mais
        </ButtonCard>
      </ContentButton>
      {isOpen && (
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
