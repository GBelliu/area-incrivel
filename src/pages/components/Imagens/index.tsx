import { ReactNode, useEffect, useState } from "react";

import {
  CardsContent,
  Container,
  Content,
  OptionsContent,
  Option,
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

  useEffect(() => {
    setTipoSelecionado(String(Object.keys(imagens?.[empreendimento])[0]));
  }, [empreendimento]);

  console.log(imagens?.[empreendimento]);

  return (
    <Container>
      <Content theme={theme}>
        <h1>
          Confira mais imagens do seu <span>futuro imóvel</span>!
        </h1>
        <OptionsContent>
          {Object.keys(imagens?.[empreendimento])?.map((key) => {
            return (
              <Option
                onClick={() => {
                  setTipoSelecionado(key);
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
          {imagens?.[empreendimento]?.[tipoSelecionado].map((item: any) => {
            return <img src={item} alt="" />;
          })}
        </CardsContent>
      </Content>
    </Container>
  );
}
