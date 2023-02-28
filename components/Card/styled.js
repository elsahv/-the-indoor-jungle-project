import styled from "styled-components";

export const Content = styled.div`
  // background: teal;
  margin: 10px 25px;
  padding: 20px 10px 10px 10px;
  text-transform: capitalize;
  p {
    padding-left: 5px;
  }
  button {
    margin-left: 5px;
    margin-top: 5px;
    padding: 5px 10px;
    a {
      color: #000;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 531px) {
    margin: 5px 10px;
  }
`;

export const PostTitle = styled.h2`
  font-size: 35px;
  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  .img {
    width: 100%;
    border: 1px solid #333232;
    border-radius: 3px;
  }

  @media only screen and (max-width: 1024px) {
    .img {
      height: 470px;
    }

    @media only screen and (max-width: 531px) {
      .img {
        height: 270px;
      }
    }
  }
`;
