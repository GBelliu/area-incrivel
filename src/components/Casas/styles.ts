import styled from "styled-components";

<<<<<<< HEAD
export const Container = styled.div`
=======
export const Container = styled.section`
>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 80px 0;
  justify-content: center;
<<<<<<< HEAD
=======
  background-color: #f0f0f0;
>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
`;

export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  gap: 60px;

  h1 {
    font-size: 36px;
    font-weight: 700;
<<<<<<< HEAD
    color: #404040;
=======
    color: #000;

    span {
      color: #c21313;
    }
>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
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
  }
`;
<<<<<<< HEAD
=======

export const ContentCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 25px;
`;
>>>>>>> 8815ff1bf3322f306d32c2ffc1f761cbdf246d9f
