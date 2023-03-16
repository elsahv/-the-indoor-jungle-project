import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background: #483c46;
  border-right: 1px solid #000;
  a {
    color: teal;
    // color: #fff;
    text-shadow: 1px 1px 1px maroon;
    text-decoration: none;
  }
  a:hover {
    text-shadow: 1px 1px 1px gray;
    transition: 1s;
    // color: #fff;
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    display: flex;
    justify-content: flex-start;
    top: 0;
    height: 170px;
  }
`;

export const Content = styled.ul`
  height: 25vh;
  // background: green;
  padding-left: 15px;
  cursor: pointer;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    height: 18vh;
  }
`;

export const NavSection = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  // text-shadow: 1px 1px 1px #000;

  @media only screen and (max-width: 600px) {
    // flex-direction: row;
  }
`;

export const Logo = styled.h1`
  font-size: 35px;
  width: 80%;
  padding-bottom: 10px;
  color: teal;
  text-shadow: 1px 1px 1px maroon;

  @media only screen and (max-width: 1024px) {
    width: 60%;
    font-size: 27px;
  }
  @media only screen and (max-width: 834px) {
    width: 53%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 5px 0px;
  }
`;
