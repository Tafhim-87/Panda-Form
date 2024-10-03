import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form1 = () => {
  useGSAP(() => {
    gsap.from("#form1 div", {
      y: -30,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.3,
    });
  });

  const navigate = useNavigate();
  // State to store form values and validation errors
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessType: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  // Validation logic
  const validateForm = () => {
    let newErrors = {};

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formValues.businessType) {
      newErrors.businessType = "Business Type is required";
    }

    if (!formValues.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{11}$/.test(formValues.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 11 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", formValues);
      navigate("/popup");
      // You can send formValues to the server or process them here
    } else {
      console.log("Form has errors", errors);
    }
  };

  return (
    <div id="form1">
      <h1 className="text-2xl font-semibold">Ready to grow your business?</h1>
      <form
        className="mt-3 flex flex-col w-full gap-11"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            name="firstName"
            type="text"
            value={formValues.firstName}
            onChange={handleChange}
            className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
            required
          />
          <label className="lable1 absolute px-5 font-xl duration-200 mt-2  font-semibold bg-zinc-200 rounded-full">
            Business Owner First Name
          </label>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-10 ml-5 absolute">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="relative mt-10">
          <input
            name="lastName"
            type="text"
            value={formValues.lastName}
            onChange={handleChange}
            className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
            required
          />
          <label className="lable1 absolute px-5 font-xl duration-200 rounded-full mt-2  font-semibold bg-zinc-200 ">
            Business Owner Last Name
          </label>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-10 ml-5 absolute">
              {errors.lastName}
            </p>
          )}
        </div>

        <div className="relative mt-10">
          <input
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
            required
          />
          <label className="lable1 absolute px-5 font-xl duration-200 mt-2  font-semibold bg-zinc-200 rounded-full">
            Enter Your Business Email
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm mt-10 ml-5 absolute">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mt-10 w-full relative">
          <select
            name="businessType"
            value={formValues.businessType}
            onChange={handleChange}
            className="w-full h-11 rounded-full shadow-xl px-5 py-2 duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
            required
          >
            <option value="">Business Type</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Shop">Shop</option>
          </select>
          {errors.businessType && (
            <p className="text-red-500 text-sm ml-5">{errors.businessType}</p>
          )}
        </div>

        <div className="relative ">
          <input
            name="phoneNumber"
            type="text"
            value={formValues.phoneNumber}
            onChange={handleChange}
            className="ipt1 z-10 w-full h-11 rounded-full shadow-xl px-5 py-2 absolute duration-100 outline-none bg-transparent border-solid border-2 border-zinc-300"
            required
          />
          <label className="lable1 absolute px-5 font-xl duration-200 mt-2  font-semibold bg-zinc-200 rounded-full">
            Enter Your Number
          </label>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-10 ml-5 absolute">
              {errors.phoneNumber}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-pink-500 rounded-lg text-white active:scale-105 w-full mt-10"
          onClick={handleSubmit}
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Form1;
