import styled from "styled-components";

export const Content = styled.div`
  // background: teal;
  padding: 10px;
  text-transform: capitalize;
  p {
    padding-left: 5px;
  }

  @media only screen and (max-width: 531px) {
    margin: 5px 10px;
  }
`;

export const PostTitle = styled.h2`
  font-size: 35px;
  color: teal;
  text-shadow: 1px 1px 1px #000;
  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
   
  .img {
     width: 100%;
  height: 400px;
    border: 2px solid #333232;
    border-radius: 3px;
  }

  @media only screen and (max-width: 1024px) {
    margin-right: 25px;
  }

    @media only screen and (max-width: 531px) {
      margin: 0;
     
    }
  }
`;

export const Button = styled.button`
  margin-left: 5px;
  margin-top: 15px;
  padding: 5px 10px;
  background: teal;
  border: 1px solid #000;
  a {
    color: #fff;
    text-decoration: none;
    text-shadow: 1px 1px 1px #000;
    &:hover {
      color: orange;
      transition: 1s;
    }
  }
`;
