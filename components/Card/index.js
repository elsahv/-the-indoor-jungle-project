import Link from "next/link";
import { urlFor } from "../../utils/image";
import { PostTitle, Wrapper, ImgWrapper, Button } from "./styled";

const Card = ({ post }) => {
  return (
    <>
      <Wrapper>
        <PostTitle>{post.title}</PostTitle>
        {/* <p>date</p> */}

        <Link href={`post/${post.slug.current}`}>
          <ImgWrapper>
            <img src={urlFor(post.image)} alt="" className="img" />
          </ImgWrapper>
        </Link>
      </Wrapper>
    </>
  );
};

export default Card;
