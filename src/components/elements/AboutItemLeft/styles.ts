import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
`;

export const LeftContent = styled.div`
  width: 20%;
  background: #030303;
`;

export const RightContent = styled.div`
  width: 80%;
  padding: 25px;
`;
