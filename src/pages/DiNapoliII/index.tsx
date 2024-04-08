import { ReactNode } from "react";

import { Container } from "./styles";
import { Footer } from "../../components/Footer";
import { Hero } from "../components/Hero";
import { Sobre } from "../components/Sobre";
import { ThemeProvider } from "../ThemeContext";
import { Apresentacao } from "../components/Apresentacao";
import { VejaMais } from "../components/VejaMais";
import { Estagio } from "../components/Estagio";
import { Header } from "../components/Header";
import { Explore } from "../components/3D";
import { Numeros } from "../components/Numeros";
import { Ofertas } from "../components/Ofertas";
import { PontosDeInteresse } from "../components/PontosDeInteresse";
import { Redes } from "../components/Redes";
import { Depoimentos } from "../components/Depoimentos";
import { Imagens } from "../components/Imagens";
import { Garantia } from "../components/Garantia";
import { EA } from "../components/EA";
import { PorqueArea } from "../components/PorqueArea";
import { Empresas } from "../../components/Empresas";
import { SobreArea } from "../components/SobreArea";
import { Helmet } from "react-helmet";
import { GrupoMNGT } from "../../components/GrupoMNGT";
export function DiNapoliII() {
  const dataPhase = [
    {
      name: "Fundação",
      value: 100,
    },

    {
      name: "Passagem de Elétrica",
      value: 25,
    },
    {
      name: "Levantamento de Placas Lightwall",
      value: 90,
    },
    {
      name: "Pintura e Acabamentos",
      value: 25,
    },
    {
      name: "Esquadrias e Marmoaria",
      value: 0,
    },

    {
      name: "Pisos e Azulejos",
      value: 25,
    },
    {
      name: "Portas e Janelas",
      value: 0,
    },
  ];

  const totalValue = dataPhase.reduce((acc, curr) => acc + curr.value, 0);

  // Calculando a média como uma porcentagem
  const mediaPorcentagem = totalValue / dataPhase.length;

  const empreendimento = "Di Napoli II";
  return (
    <ThemeProvider page="dinapoli2">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AI | Residencial Di Napoli II</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Container>
        <Header />
        <Hero
          category="lançamento"
          video="https://res.cloudinary.com/duv6mjghr/video/upload/v1712586384/dn2/dinapoli2background_topkaf.mp4"
          subname="Condomínio Residencial"
          name={empreendimento}
          description="Lotes | Casas Modulares | Casas incríveis"
          value="617,00"
          facebook="https://www.facebook.com/area.incrivelrc"
          instagram="https://www.instagram.com/dinapoli_2_residencial/"
          whatsapp=""
          buttonLink="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
        />
        <Numeros empreendimentoItens="dinapoli2" />
        <Sobre
          logoEmpreendimento="https://res.cloudinary.com/duv6mjghr/image/upload/v1712586382/dn2/logodn2_xi3ie4.png"
          about="O lugar do seu sonho é o Condompinio Di Napoli II, que fica num bairro encantador, o Recanto Paraíso. São exclusivos 36 lotes de 105 m² a 120 m², com vista encantadora para a Serra do Itaqueri. Sua casa pode ser modular ou ter uma planta incrível bem charmosa, humanizada e tecnológica. O Di Napoli II é o lugar para ser e pertencer, com possibilidade de geração de energia solar limpa, automação residencial e qualidade de vida excepcional."
          linkButton="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20Di%20Napoli%20II"
        />

        <Apresentacao
          iframe={
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/lzeoH57yFck"
              title="Conheça a casa do Di Napoli II"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          }
          // iframe={
          //   <iframe
          //     width="100%"
          //     src="https://www.youtube.com/embed/LwuLEmqY1Xc"
          //     title="Como é a vida no Recanto Paraiso em Rio Claro - SP?"
          //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //     allowFullScreen
          //   ></iframe>
          // }
          empreendimento={empreendimento}
          apresentacao="https://res.cloudinary.com/duv6mjghr/image/upload/v1712592778/dn2/Di_Napoli_II_1_pmql2g.png"
        />
        <Ofertas
          empreendimento="dinapoli2"
          background="https://res.cloudinary.com/duv6mjghr/image/upload/v1712586384/dn2/portariadn2_zldii3.jpg"
        />
        {/* <ExplicacaoCasas/> */}
        <Empresas />
        <Estagio
          percentageTotal={Number(mediaPorcentagem.toFixed(0))}
          listItems={dataPhase}
        />
        <Garantia />

        <Depoimentos empreendimento="dinapoli1" />
        <Imagens empreendimento="dinapoli2" />
        <PontosDeInteresse
          empreendimento="Di Napoli II"
          empreendimentoPonto="dinapoli2"
        />
        <VejaMais
          empreendimento={empreendimento}
          empreendimentoItens="dinapoli2"
        />

        {/* <EA /> */}
        <SobreArea />

        <Redes
          instagram="https://www.instagram.com/dinapoli_residencial/"
          facebook="https://www.facebook.com/dinapoli2.residencial"
          mockupImgInsta="https://res.cloudinary.com/duv6mjghr/image/upload/v1712595391/dn2/dn2mockupinsta_a2mj66.png"
          mockupImgFace="https://res.cloudinary.com/duv6mjghr/image/upload/v1712595392/dn2/dn2mockupface_bi0jat.png"
        />
        <GrupoMNGT />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
