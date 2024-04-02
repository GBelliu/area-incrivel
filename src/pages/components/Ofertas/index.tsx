import { ReactNode, useEffect, useState } from "react";

import {
  CardsContent,
  Container,
  Content,
  OptionsContent,
  Option,
  Blur,
  LoadMoreButton,
} from "./styles";
import { useTheme } from "../../ThemeContext";
import { CardEmpreendimento } from "../elements/CardEmpreendimento";
import { List, ListItem } from "../elements/CardEmpreendimento/styles";
import { empreendimentos } from "../../utils/empreendimentos";

interface OfertasProps {
  empreendimento: string;
  background?: string;
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

export function Ofertas({
  empreendimento,

  background,
}: OfertasProps) {
  const theme = useTheme();
  const [tipoSelecionado, setTipoSelecionado] = useState<any>(
    String(Object.keys(empreendimentos?.[empreendimento])[0])
  );
  const [ofertasExibidas, setOfertasExibidas] = useState<string[]>([]);
  // const [loadedOfertas, setLoadedOfertas] = useState<number>(3);

  // useEffect(() => {
  //   setTipoSelecionado(
  //     String(Object.keys(empreendimentos?.[empreendimento])[0])
  //   );
  // }, [empreendimento]);
  useEffect(() => {
    if (empreendimento && empreendimentos[empreendimento]) {
      const tipos = Object.keys(empreendimentos[empreendimento]);
      setTipoSelecionado(tipos[0]); // Seleciona o primeiro tipo de imagem por padrão
      setOfertasExibidas(empreendimentos[empreendimento][tipos[0]]);
    }
  }, [empreendimento]);

  // const handleLoadMore = () => {
  //   setLoadedOfertas((prevCount) => prevCount + 3);
  // };

  const handleTipoSelecionado = (tipo: string) => {
    setTipoSelecionado(tipo);
    // setLoadedOfertas(4); // Reseta o contador de imagens ao mudar o tipo selecionado
    setOfertasExibidas(empreendimentos[empreendimento][tipo]);
  };

  // useEffect(() => {
  //   if (empreendimento && tipoSelecionado) {
  //     setOfertasExibidas(
  //       empreendimentos[empreendimento][tipoSelecionado].slice(0, loadedOfertas)
  //     );
  //   }
  // }, [empreendimento, tipoSelecionado, loadedOfertas]);

  return (
    <Container backgroundImg={background}>
      <Blur />
      <Content theme={theme}>
        <h1>
          Confira nossas <span>ofertas</span>!
        </h1>
        {Object.keys(empreendimentos?.[empreendimento]).length === 1 ? null : (
          <OptionsContent>
            {Object.keys(empreendimentos?.[empreendimento] || {})?.map(
              (key) => {
                return (
                  <Option
                    onClick={() => {
                      handleTipoSelecionado(key);
                    }}
                    theme={theme}
                    selected={key === tipoSelecionado}
                  >
                    {key.replace("_", " ")}
                  </Option>
                );
              }
            )}
          </OptionsContent>
        )}

        <CardsContent>
          {ofertasExibidas.map((item: any) => {
            return (
              <CardEmpreendimento
                key={item}
                title={item.title}
                preco={item.preco}
                linkButton={item.link}
                img={item.planta}
                imgModal={item.modal}
                list={
                  <List>
                    {item.list.map((itemList: any) => {
                      return (
                        <ListItem theme={theme}>
                          <span>•</span> {itemList}
                        </ListItem>
                      );
                    })}
                  </List>
                }
              />
            );
          })}
        </CardsContent>
        {/* {empreendimentos[empreendimento]?.[tipoSelecionado]?.length >
          loadedOfertas && (
          <LoadMoreButton theme={theme} onClick={handleLoadMore}>
            Carregar mais
          </LoadMoreButton>
        )} */}
      </Content>
    </Container>
  );
}
