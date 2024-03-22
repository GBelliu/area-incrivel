import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const Icon = styled.div`
  svg {
    color: ${(props) => props.theme.primaryColor};
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #000;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
