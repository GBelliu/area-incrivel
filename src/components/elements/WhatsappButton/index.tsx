import { ReactNode } from "react";

import { Container } from "./styles";

export function WhatsappButton() {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1%21+Tudo+bem%3F"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <img src="whatsappicon.svg" alt="" />
      </a>
    </Container>
  );
}
