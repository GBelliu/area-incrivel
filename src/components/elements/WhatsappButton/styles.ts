import styled from "styled-components";

export const Container = styled.div`
  .whatsapp_float {
    position: fixed;
    width: 70px;
    height: 70px;
    bottom: 30px;
    right: 30px;
    background-color: #4da735;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.15),
      0px 8px 16px rgba(255, 255, 255, 0.1);
    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 36px;
    }
  }

  @media screen and (max-width: 767px) {
    .whatsapp_float {
      bottom: 20px;
      right: 20px;
    }
    .whatsapp-icon {
      margin-top: 10px;
    }
  }
`;
