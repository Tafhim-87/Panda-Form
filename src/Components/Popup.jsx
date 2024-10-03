import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  useGSAP(() => {
    gsap.from("#pop", {
      y: -30,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  });

  const navigate = useNavigate();
  return (
    <div
      id="pop"
      className="w-full h-[80vh] flex justify-center items-center  "
    >
      <div className="popUp w-[30vw] bg-zinc-200 rounded-lg flex justify-center items-center flex-col p-[3vw] shadow-2xl">
        <h1 className="text-[2.5vw] font-semibold mb-10">Verify your email</h1>
        <img
          src="https://partner.foodpanda.com.bd/resource/SSUFP/assets/images/email-sent-v2.svg"
          className="mb-5"
          alt="Email sent illustration"
        />
        <h5 className="text-center">
          {`To verify your account, click the link we sent to 
          your given email. If you can’t see it, check your spam folder.`}
        </h5>

        <button
          onClick={() => navigate("/form2")}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Skip And Continue
        </button>
      </div>
    </div>
  );
};

export default Popup;
