import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background: #333232;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Content = styled.ul`
  height: 25vh;
  // background: green;
  padding-left: 15px;
  cursor: pointer;
`;

export const NavSection = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export const Logo = styled.h1`
  font-size: 30px;
  width: 80%;
  padding-bottom: 10px;
`;

export const SmIcons = styled.div``;
