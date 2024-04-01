import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* fundo escuro para criar o efeito de modal */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 25px;
  border-radius: 5px;
  width: 900px;
  display: flex;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }

  @media (min-width: 1023px) {
    margin-top: 50px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 600px;
  }
  @media (max-width: 767px) {
    padding: 10px;
    width: 370px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 767px) {
    top: -25px;
    right: -5px;
    color: #fff;
  }
`;
