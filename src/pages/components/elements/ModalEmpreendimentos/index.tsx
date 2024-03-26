import { ReactNode } from "react";

import { CloseButton, ModalContent, ModalWrapper } from "./styles";
import { X } from "lucide-react";

interface ModalEmpreendimentosProps {
  onClickModal: any;
  onClickClose: any;
  children: ReactNode;
}

export function ModalEmpreendimentos({
  onClickModal,
  onClickClose,
  children,
}: ModalEmpreendimentosProps) {
  return (
    <ModalWrapper onClick={onClickModal}>
      <ModalContent>
        <CloseButton onClick={onClickClose}>
          <X size={24} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
}
