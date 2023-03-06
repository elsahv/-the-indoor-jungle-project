import styled from "styled-components";

export const Section = styled.section`
  // height: 100vh;
  background: teal;
  @media only screen and (max-width: 1024px) {
    height: 100%;
  }
`;
export const Grid = styled.div`
  // background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "leftSide"
      "rightSide";
  }
`;

export const LeftSide = styled.div`
  grid-area: leftSide;
  // background: teal;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;

  @media only screen and (max-width: 1024px) {
    // padding: 30px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;

export const ImgWrapper = styled.div`
  // background: teal;
  // border: solid 2px #000;
  width: 500px;
  height: 500px;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: auto;
  }
`;

export const RightSide = styled.div`
  grid-area: rightSide;
  color: #fff;
  text-shadow: 1px 1px 1px #000;
  display: flex;
  justify-content: center;
`;

export const AboutContent = styled.div`
  padding: 100px 50px 0;
  // background-color: orange;
  @media only screen and (max-width: 1024px) {
    padding: auto;
  }
  @media only screen and (max-width: 768px) {
    padding: 15px;
  }
`;
