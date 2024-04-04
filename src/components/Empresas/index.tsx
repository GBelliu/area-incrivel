import {
  Container,
  Content,
  Button,
  ContentEmpresas,
  EnergiaAmigaContent,
  LarIncrivelContent,
  LarNoCelularContent,
} from "./styles";

export function Empresas() {
  return (
    <Container id="parceiras">
      <Content>
        <h1>
          Confira nossas empresas <span>parceiras</span>
        </h1>

        <ContentEmpresas>
          <EnergiaAmigaContent>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492235/public/logoenergia_zppn2b.png"
              alt=""
            />
            <h2>Energia Fotovoltaica</h2>{" "}
            <p>
              Alinhado às novas práticas de sustentabilidade, o condomínio
              oferece diferenciais ambientais, sendo um deles a geração de
              energia solar limpa e renovável, por meio da parceria com a
              empresa Energia Amiga, que também compõe o Grupo MNGT.
            </p>
          </EnergiaAmigaContent>
          <LarIncrivelContent>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492239/public/logolar_m5m4nx.png"
              alt=""
            />
            {/* <h2>Lar Incrivel: Construtora</h2>{" "} */}
            <p>
              A Lar Incrível é uma construtora comprometida com a inovaçao, seja
              no método construtivo ou na forma de entregar projetos, que podem
              ser customizados pelos compradores. A Lar Incrível tem know-how de
              mais de 20 anos na construção de galpões para logística e, agora,
              usa essa expertise na habitaçao com tecnologias sustentáveis,
              menos poluentes, ágeis e muito mais acessíveis à população.
            </p>
          </LarIncrivelContent>

          <LarNoCelularContent>
            <img
              src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492225/public/larnocellogo_ligc0q.png"
              alt=""
            />
            <h2>Automação Residencial</h2>{" "}
            <p>
              Com a automação residencial mais acessível do mercado, sua casa
              terá segurança com monitoramento interno e externo por câmeras,
              controle de eletroeletrônicos de qualquer lugar, via celular. A
              automação valoriza seu imóvel em pelo menos 20%.
            </p>
          </LarNoCelularContent>
        </ContentEmpresas>
      </Content>

      <img
        className="reddec"
        src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492250/public/reddec_tzid6m.svg"
        alt=""
      />
      <img
        className="graydec"
        src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492209/public/graydec_u1iwzv.svg"
        alt=""
      />
    </Container>
  );
}
