import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form2 = () => {
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
    businessType: "",
    businessCategory: "",
    branch: "",
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
      formErrors.businessName = "Business Name is required.";
    }

    if (!formData.businessType) {
      formErrors.businessType = "Please select a business type.";
    }

    if (!formData.businessCategory) {
      formErrors.businessCategory = "Please select a business category.";
    }

    if (!formData.branch) {
      formErrors.branch = "Branch name is required.";
    }

    // Validate mobile number (example: checking length)
    if (!formData.mobileNumber) {
      formErrors.mobileNumber = "Mobile Number is required.";
    } else if (!/^\d{11}$/.test(formData.mobileNumber)) {
      formErrors.mobileNumber = "Please enter a valid 11-digit mobile number.";
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
      navigate("/form3");
    } else {
      // Set errors to display validation messages
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="form2 w-full h-[120vh] overflow-hidden flex ">
        <div className="f2img w-[40%] ">
          <img
            className=" w-full h-full object-cover"
            src="https://partner.foodpanda.com.bd/resource/SSUFP_PK/PK_Assets/images/desktop/registration-page/business-details.webp"
            alt=""
          />
        </div>
        <div
          id="form2"
          className="w-[60%] bg-zinc-200 flex flex-col justify-center items-start"
        >
          <div className=" py-5 px-3 mt-[5rem] ml-[10vw] ">
            <h1 className="text-3xl font-bold f2Head">
              Tell us about your business
            </h1>
            <h3 className=" w-2/3 mt-5 text-center f2Sub">
              This information will be shown on the app so that customers can
              search and contact you in case they have any questions.
            </h3>
            <div className="f2main relative mt-10 w-[70%]">
              <input
                type="text"
                name="businessName"
                className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                value={formData.businessName}
                onChange={handleInputChange}
                required
              />
              <label className="lable1 absolute px-5 font-xl duration-200 mt-2 text-zinc-500 font-semibold bg-zinc-200 rounded-full">
                Your Business Name
              </label>
              {errors.businessName && (
                <p className="text-red-500 text-sm absolute mt-12 ml-5">
                  {errors.businessName}
                </p>
              )}
            </div>
            <div className="f2main mt-[7.5rem] w-[70%] relative">
              <select
                name="businessType"
                className="w-full h-11 rounded-full shadow-xl px-5 py-2 duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                value={formData.businessType}
                onChange={handleInputChange}
                required
              >
                <option value="">Business Type</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Shop">Shop</option>
              </select>
              {errors.businessType && (
                <p className="text-red-500 text-sm absolute mt-1 ml-5">
                  {errors.businessType}
                </p>
              )}
            </div>
            <div className="f2main flex gap-7">
              <div className="f2P mt-10 w-[41%] relative">
                <select
                  name="businessCategory"
                  className="w-full h-11 rounded-full shadow-xl px-5 py-2 duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                  value={formData.businessCategory}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Business Category</option>
                  <option value="Home Based Kitchen">Home Based Kitchen</option>
                  <option value="Street Food">Street Food</option>
                </select>
                {errors.businessCategory && (
                  <p className="text-red-500 text-sm absolute mt-1 ml-5">
                    {errors.businessCategory}
                  </p>
                )}
              </div>
              <div className="f2P relative mt-10 w-[25%]">
                <input
                  type="text"
                  name="branch"
                  className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                  value={formData.branch}
                  onChange={handleInputChange}
                  required
                />
                <label className="lable1 absolute px-5 font-xl duration-200 mt-2 text-zinc-500 font-semibold bg-zinc-200 rounded-full">
                  Branch
                </label>
                {errors.branch && (
                  <p className="text-red-500 text-sm absolute mt-12 ml-5">
                    {errors.branch}
                  </p>
                )}
              </div>
            </div>
            <div className=" f2main relative mt-10 w-[70%]">
              <input
                type="text"
                name="mobileNumber"
                className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
              />
              <label className="lable1 absolute px-5 font-xl duration-200 mt-2 text-zinc-500 font-semibold bg-zinc-200 rounded-full">
                Mobile Number
              </label>
              {errors.mobileNumber && (
                <p className="text-red-500 text-sm absolute mt-12 ml-5 ">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
          </div>
          <footer className="w-[90%]  mt-[7rem] flex flex-col justify-end items-center ml-10 px-10 ">
            <div className="w-full h-[5px] rounded-full bg-zinc-300 mb-5"></div>
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

export default Form2;
