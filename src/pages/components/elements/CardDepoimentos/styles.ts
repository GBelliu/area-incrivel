import styled from "styled-components";

export const Container = styled.div`
  background-image: url("texturedep.png"),
    linear-gradient(
      ${(props) => props.theme.primaryColor}70,
      ${(props) => props.theme.secondaryColor}70
    );
  background-size: cover;
  background-repeat: no-repeat;
  height: fit-content;
  width: 100%;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  gap: 25px;
`;

export const Text = styled.span`
  font-size: 20px;
  font-weight: 700;
  @media (max-width: 767px) {
    font-size: 16px;
  }
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
  gap: 7px;
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #222222;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;
export const Sub = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #00000050;
`;
