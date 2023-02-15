import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
`;
export const Grid = styled.div`
  // background: orange;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftSide rightSide";

  @media only screen and (max-width: 834px) {
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
  width: 500px;
  height: 500px;

  @media only screen and (max-width: 1024px) {
    width: 400px;
    height: 400px;
    padding: auto;
  }
  @media only screen and (max-width: 531px) {
    width: 300px;
    height: 300px;
    padding: auto;
  }
`;

export const RightSide = styled.div`
  grid-area: rightSide;
  // background: coral;
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

export const ThreeCol = styled.div`
  // background: pink;
  margin: 20px;
  padding: 20px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;

  @media only screen and (max-width: 1024px) {
    padding: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2em;
  }

  @media only screen and (max-width: 768px) {
    padding: 5px 0;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Sq = styled.div`
  border-radius: 10px;
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 50px 20px;
  height: 200px;
  color: #fff;
  background: teal;
  text-shadow: 1px 1px 1px #000;

  @media only screen and (max-width: 1024px) {
    height: 280px;
  }
  @media only screen and (max-width: 600px) {
    height: 320px;
  }
`;
