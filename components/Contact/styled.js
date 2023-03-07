import styled from "styled-components";

export const Section = styled.section`
  // background: coral;
  // height: 100vh;
  margin-top: 250px;
  position: relative;
  bottom: 0;
  width: 100%;
  a {
    color: #000;
  }
  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
  @media only screen and (max-width: 600px) {
    border-top: solid 1px #000;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }
`;

export const ContactFormWrapper = styled.div`
  grid-area: right;
  // border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0 50px;
  background: teal;
  border-radius: 5px;

  @media only screen and (max-width: 1024px) {
    border-top: 1px solid #000;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 50px;
    padding-top: 20px;
  }
  @media only screen and (max-width: 531px) {
    padding: 10px;
  }
`;
export const Content = styled.div`
  // color: teal;
  // text-shadow: 1px 1px 1px maroon;
  grid-area: left;
  padding: 80px 70px 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media only screen and (max-width: 531px) {
    padding: 20px;
  }
`;
