import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.div``;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 500;
  word-spacing: 20%;
  color: #fff;
  text-align: center;
`;
export const Data = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #443d4b;
  text-align: center;
  background-image: linear-gradient(
    45deg,
    ${(props) => props.theme.primaryColor},
    ${(props) => props.theme.secondaryColor}
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
