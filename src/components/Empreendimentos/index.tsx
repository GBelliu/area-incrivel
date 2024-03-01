import { Container, Content } from "./styles";
import { Lotes } from "./Lotes";
import { Apartamentos } from "./Apartamentos";
import { Casas } from "./Casas";

export function Empreendimentos() {
  return (
    <Container>
      <Content>
        <Lotes />
        <Casas />
        <Apartamentos />
      </Content>
    </Container>
  );
}
