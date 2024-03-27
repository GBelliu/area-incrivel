import { ReactNode } from "react";

import { Container } from "./styles";

export function WhatsappButton() {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=551930970232&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20empreendimentos%20da%20%C3%81rea%20Incr%C3%ADvel!"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <img
          src="https://res.cloudinary.com/duv6mjghr/image/upload/v1711492261/public/whatsappicon_arkpst.svg"
          alt=""
        />
      </a>
    </Container>
  );
}
