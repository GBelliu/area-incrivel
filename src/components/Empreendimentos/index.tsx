import { ReactNode, useEffect } from "react";

import { Container } from "./styles";
import { useAllPrismicDocumentsByType } from "@prismicio/react";

export function Empreendimentos() {
  const [documents] = useAllPrismicDocumentsByType("empreendimento");
  useEffect(() => {
    console.log(documents);
  }, [documents]);
  return (
    <Container>
      <h1>Empreendimentos</h1>
    </Container>
  );
}
