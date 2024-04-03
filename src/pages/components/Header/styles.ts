import styled, { css } from "styled-components";
interface HeaderProps {
  background: boolean;
}
export const Container = styled.div<HeaderProps>`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 20px 0;
  background-color: white;
  justify-content: center;
  position: fixed;
  /* background-color: ${({ background }) =>
    background ? "#282828" : "transparent"}; */
  background-color: #28282890;

  z-index: 99;

  ${({ background }) =>
    background &&
    css`
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(7px);
    `};
`;
export const Content = styled.div`
  max-width: 1394px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: relative;
  img {
    height: 45px;
  }

  a {
    text-decoration: none;
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
    justify-content: space-between;
    img {
      height: 65px;
      margin-left: 0px;
    }
  }

  .bm-burger-button {
    position: absolute;
    right: 0;
    top: 14px;
    width: 33px;
    height: 30px;
    margin-bottom: 10px;
    display: none;
    z-index: 990 !important;
    display: flex;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #fff;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #fff !important;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #fff;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #000;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
    height: 100vh !important;
    z-index: 99;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #fff;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: #fff;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: #d1d1d1;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    right: 0;
    top: 0;
  }
`;

export const ButtonHeader = styled.button`
  display: flex !important;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  padding: 15px 20px;
  background-color: #7b7b7b;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  gap: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;

  &:active {
    transform: scale(0.95) translateZ(0px) !important;
  }

  &:hover {
    transform: scale(1.03) translateZ(0px);
  }

  @media (max-width: 1750px) {
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 15px 20px;
  }
  @media (max-width: 767px) {
    padding: 15px 20px;
    font-size: 18px;
  }
`;
