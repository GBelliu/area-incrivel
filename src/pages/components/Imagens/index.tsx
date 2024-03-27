import { ReactNode, useEffect, useState } from "react";

import {
  CardsContent,
  Container,
  Content,
  OptionsContent,
  Option,
  LoadMoreButton,
} from "./styles";
import { useTheme } from "../../ThemeContext";

import { ModalEmpreendimentos } from "../elements/ModalEmpreendimentos";
import { imagens } from "../../utils/imagens";

interface ImagensProps {
  empreendimento: string;
}

interface EmpreendimentoItem {
  title: string;
  preco: string;
  list: string[];
}

interface Empreendimentos {
  casas: EmpreendimentoItem[];
  lotes: EmpreendimentoItem[];
  apartamentos: EmpreendimentoItem[];
}

export function Imagens({ empreendimento }: ImagensProps) {
  const theme = useTheme();
  const [tipoSelecionado, setTipoSelecionado] = useState<any>(
    String(Object.keys(imagens?.[empreendimento])[0])
  );
  const [imagensExibidas, setImagensExibidas] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<number>(4);

  useEffect(() => {
    if (empreendimento && imagens[empreendimento]) {
      const tipos = Object.keys(imagens[empreendimento]);
      setTipoSelecionado(tipos[0]); // Seleciona o primeiro tipo de imagem por padrão
      setImagensExibidas(
        imagens[empreendimento][tipos[0]].slice(0, loadedImages)
      );
    }
  }, [empreendimento]);

  const handleLoadMore = () => {
    setLoadedImages((prevCount) => prevCount + 4);
  };

  const handleTipoSelecionado = (tipo: string) => {
    setTipoSelecionado(tipo);
    setLoadedImages(4); // Reseta o contador de imagens ao mudar o tipo selecionado
    setImagensExibidas(imagens[empreendimento][tipo].slice(0, 4));
  };

  useEffect(() => {
    if (empreendimento && tipoSelecionado) {
      setImagensExibidas(
        imagens[empreendimento][tipoSelecionado].slice(0, loadedImages)
      );
    }
  }, [empreendimento, tipoSelecionado, loadedImages]);

  const [isOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const openModal = (item: any) => {
    setIsOpen(true);
    setModalImg(item);
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
    <Container>
      <Content theme={theme}>
        <h1>
          Confira mais imagens do seu <span>futuro imóvel</span>!
        </h1>
        <OptionsContent>
          {Object.keys(imagens?.[empreendimento] || {})?.map((key) => {
            return (
              <Option
                onClick={() => {
                  handleTipoSelecionado(key);
                }}
                theme={theme}
                selected={key === tipoSelecionado}
              >
                {key}
              </Option>
            );
          })}
        </OptionsContent>
        <CardsContent>
          {imagensExibidas.map((item: string) => (
            <img onClick={() => openModal(item)} key={item} src={item} alt="" />
          ))}
        </CardsContent>
        {imagens[empreendimento]?.[tipoSelecionado]?.length > loadedImages && (
          <LoadMoreButton onClick={handleLoadMore}>
            Carregar mais
          </LoadMoreButton>
        )}
      </Content>
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
