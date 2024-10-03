import React from "react";
import Form1 from "./Form1";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero", {
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  });

  return (
    <>
      <main>
        <div className="hero w-full h-[120vh] ">
          <div className="hero2 w-full h-full bg-zinc-300 flex  justify-between items-center py-[2vw] px-[7vw] relative gap-[5vw]">
            <div className="main-head flex flex-col justify-center items-start py-[.5rem] px-[1rem] rounded-lg ">
              <h1 className="heroHead text-[4vw] capitalize font-semibold">
                Boost your revenue <br /> with{" "}
                <span className="font-bold text-pink-500">foodpanda!</span>
              </h1>
              <h3 className="heroSub text-[1.5vw] w-[80%] mt-5 font-semibold text-zinc-900">
                Sign up now and start earning more with the leading food
                delivery service foodpanda.
              </h3>
            </div>
            <div className="main w-[32rem] bg-zinc-200 rounded-lg py-[1vw] px-[2vw] shadow-white-2xl">
              <Form1 />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
