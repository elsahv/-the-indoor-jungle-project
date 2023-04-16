import Link from "next/link";
import { urlFor } from "../utils/image";

const Card = ({ post }) => {
  return (
    <>
      <div className="border border-test bg-seagreen">
        <div className="w-full">
          <Link href={`post/${post.slug.current}`}>
            <img
              src={urlFor(post.image)}
              alt=""
              className="img"
              // width="450px"
            />
          </Link>
          <h2 className="capitalize font-bold pt-2 pb-1">{post.title}</h2>
        </div>

        <p className="">{post.description}</p>
        <div className="mt-5">
          <button className="bg-parchment">
            <Link href={`post/${post.slug.current}`}>read more</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
