import Link from "next/link";
import { urlFor } from "../utils/image";

const Card = ({ post }) => {
  return (
    <>
      <div>
        <h2>{post.title}</h2>

        <Link href={`post/${post.slug.current}`}>
          <img src={urlFor(post.image)} alt="" className="img" />
        </Link>

        <p className="bg-teal">{post.description}</p>
        <button className="bg-parchment">
          <Link href={`post/${post.slug.current}`}>read more</Link>
        </button>
      </div>
    </>
  );
};

export default Card;
