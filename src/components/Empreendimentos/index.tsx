import { Container, Content } from "./styles";
import { Lotes } from "./Lotes";
import { Apartamentos } from "./Apartamentos";
import { CasasModulares } from "./CasasModulares";
import { Plantas } from "./Plantas";

export function Empreendimentos() {
  return (
    <Container id="empreendimentos">
      <Content>
        <Lotes />
        <CasasModulares />
        <Plantas />
        {/* <Apartamentos /> */}
      </Content>
    </Container>
  );
}
