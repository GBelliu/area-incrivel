import { Container, Content } from "./styles";
import { Lotes } from "./Lotes";
import { Apartamentos } from "./Apartamentos";
import { CasasModulares } from "./CasasModulares";
import { Casas } from "./Casas";

export function Empreendimentos() {
  return (
    <Container>
      <Content>
        <CasasModulares />
        <Lotes />
        <Casas />
        {/* <Apartamentos /> */}
      </Content>
    </Container>
  );
}
