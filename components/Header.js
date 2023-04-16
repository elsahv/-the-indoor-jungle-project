import Link from "next/link";
import Image from "next/image";
import Img from "../public/images/plants.jpg";

const HeaderSection = () => {
  return (
    <>
      <div className="absolute z-0 mb-5 h-screen">
        <Image src={Img} alt="" />
      </div>
      <div className="py-5 absolute z-10 w-full text-parchment">
        <div className="flex justify-evenly p-5">
          <div>
            <ul className="flex text-xl pt-3">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>

          <div className="">
            <h1 className="text-4xl">The Indoor Jungle Project</h1>
          </div>
          <div className="w-72">
            <ul className="flex justify-evenly text-xl pt-2">
              <li>Latest</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
