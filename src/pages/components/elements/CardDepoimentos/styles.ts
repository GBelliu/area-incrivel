import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://res.cloudinary.com/duv6mjghr/image/upload/v1711492257/public/texturedep_kou1sr.png"),
    linear-gradient(
      ${(props) => props.theme.primaryColor}70,
      ${(props) => props.theme.secondaryColor}70
    );
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 25px;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 16px;
  }
  color: #282828;
`;
export const PersonDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ProfileImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  /* background-color: red; */

  img {
    width: 100%;
    border-radius: inherit;
  }
`;
export const ProfileDescription = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
export const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #222222;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const Sub = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #00000050;
`;

export const Iframe = styled.div`
  width: 100%;
  height: 250px;

  iframe {
    height: 100%;
    border: none;
    border-radius: 5px;
  }
`;
