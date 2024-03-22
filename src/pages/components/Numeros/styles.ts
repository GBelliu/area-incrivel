import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #282828;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 60px 0;

  @media (max-width: 767px) {
    padding: 30px 0;
  }
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  gap: 30px;
  border-top: 1px solid #3f3f3f;
  border-bottom: 1px solid #3f3f3f;

  h1 {
    color: #fff;
  }

  @media (max-width: 1023px) {
    padding: 20px 0;
  }
  @media (max-width: 1750px) {
    max-width: 965px;
    gap: 50px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 624px;
  }
  @media (max-width: 767px) {
    max-width: 350px;
    align-items: center;
    h1 {
      font-size: 28px;
    }
  }
`;
export const ContentDados = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 767px) {
    flex-flow: column;
  }
`;
