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
import { imagens } from "./imagens";

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
            <img key={item} src={item} alt="" />
          ))}
        </CardsContent>
        {imagens[empreendimento]?.[tipoSelecionado]?.length > loadedImages && (
          <LoadMoreButton onClick={handleLoadMore}>
            Carregar mais
          </LoadMoreButton>
        )}
      </Content>
    </Container>
  );
}
