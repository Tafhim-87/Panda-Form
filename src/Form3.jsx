import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form3 = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from("#form2 div", {
      x: -30,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
    });
  });

  const [formData, setFormData] = useState({
    businessName: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Simple validation rules
  const validateForm = () => {
    let formErrors = {};

    if (!formData.businessName) {
      formErrors.businessName = "Incomplete address.";
    }
    // Validate mobile number (example: checking length)
    if (!formData.mobileNumber) {
      formErrors.mobileNumber = "Enter your link URL.";
    }

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // No errors, proceed with form submission (e.g., send data to the server)
      console.log("Form data:", formData);
      navigate("/form4");
    } else {
      // Set errors to display validation messages
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <div className="f3main w-full h-[120vh] overflow-hidden flex">
        <div className="f3img w-[40%] ">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1646927509586-08adb766512a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div
          id="form2"
          className="w-[60%] bg-zinc-200 flex flex-col justify-center items-start"
        >
          <div className=" py-5 mt-[5rem] ml-[10vw] ">
            <h1 className="text-3xl font-bold">
              Where is your business located?
            </h1>
            <h3 className="text-justify w-[80%] mt-5">
              Customers and riders will use this information to find your store.
            </h3>
            <div className="relative mt-10 w-[70%]">
              <input
                type="text"
                name="businessName"
                className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
              <label className="lable1 absolute px-5 font-xl duration-200 mt-2 text-zinc-500 font-semibold bg-zinc-200 rounded-full">
                Business Address
              </label>
              {errors.businessName && (
                <p className="text-red-500 text-sm absolute mt-12 ml-5">
                  {errors.businessName}
                </p>
              )}
            </div>
            <div className="relative mt-[8rem] w-[70%]">
              <input
                type="text"
                name="mobileNumber"
                className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
              <label className="lable1 absolute px-5 font-xl duration-200 mt-2 text-zinc-500 font-semibold bg-zinc-200 rounded-full">
                Virtual Event link
              </label>
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm absolute mt-12 ml-5 ">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
          </div>
          <footer className=" w-[90%]  mt-[7rem] flex flex-col justify-end items-center ml-10 px-10 ">
            <div className="bar w-full h-[5px] rounded-full bg-zinc-300 mb-5 relative after:absolute after:w-[50%] after:rounded-full after:h-[100%] after:bg-red-700"></div>
            <button
              type="submit"
              className="py-2 px-5 bg-pink-500 text-white rounded active:scale-105"
              onClick={handleSubmit}
            >
              Next
            </button>
          </footer>
        </div>
      </div>
    </form>
  );
};

export default Form3;
