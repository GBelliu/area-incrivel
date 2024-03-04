import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
`;

export const LeftContent = styled.div`
  width: 80%;
  padding: 35px;
`;

export const RightContent = styled.div`
  width: 20%;
  background: #030303;
`;
