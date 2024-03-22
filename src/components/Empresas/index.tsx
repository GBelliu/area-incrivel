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
            <img src="logoenergia.png" alt="" />
            <h2>Energia Fotovoltaica</h2>{" "}
            <p>
              Alinhado às novas práticas de sustentabilidade, o condomínio
              oferece diferenciais ambientais, sendo um deles a geração de
              energia solar limpa e renovável, por meio da parceria com a
              emrpesa Energia Amiga, que também compõe o Grupo MNGT.
            </p>
          </EnergiaAmigaContent>
          <LarNoCelularContent>
            <img src="larnocellogo.png" alt="" />
            <h2>Automação Residencial</h2>{" "}
            <p>
              Com a automação residencial mais acessível do mercado, sua casa
              terá segurança com monitoramento interno e externo por câmeras,
              controle de eletroeletrônicos domésticos de qualquer lugar, via
              celular. A automação valoriza seu imóvel em pelo menos 20%.
            </p>
          </LarNoCelularContent>
          <LarIncrivelContent>
            <img src="logolar.png" alt="" />
            <h2>Lar Incrivel: Construtora</h2>{" "}
            <p>
              A Lar Incrível é uma construtora comprometida com a inovaçao, seja
              no método construtivo ou na forma de entregar projetos, que podem
              ser customizados pelos compradores. A Lar Incrível tem know-how de
              mais de 20 anos de experiência na construção de galões para
              logística e, agora, usa essa expertise na habitaçao com
              tecnologias sustentáveis, menos poluentes, ágeis e muito mais
              acessíveis à população.
            </p>
          </LarIncrivelContent>
        </ContentEmpresas>
      </Content>

      <img className="reddec" src="reddec.svg" alt="" />
      <img className="graydec" src="graydec.svg" alt="" />
    </Container>
  );
}
