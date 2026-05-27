import React from "react";
import { FiPlus } from "react-icons/fi";
import { FourCard } from "../FourCard/Four-Card";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto text-center my-15">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold ">
            Friends to keep close in your life
          </h1>
          <p className="text-[16px] text-[#64748B]">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <div className="flex justify-center">
            <button className="btn bg-[#244d3f]  text-white ">
              {" "}
              <span>
                {" "}
                <FiPlus />
              </span>{" "}
              Add a Friend
            </button>
          </div>
        </div>
        <FourCard />
      </div>
    </>
  );
};

export default Banner;
