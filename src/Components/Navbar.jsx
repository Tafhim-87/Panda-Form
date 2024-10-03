import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="w-full py-[1vw] px-[4vw] bg-zinc-300 justify-between flex ">
        <div>
          <img
            src="https://partner.foodpanda.com.bd/resource/1727272073000/FoodpandaResourceV2/FoodpandaResourceV2/images/new_design/logo.svg"
            alt=""
          />
        </div>
        <button className="py-[.5vw] px-[1vw] bg-pink-500 rounded-lg text-white active:scale-105">
          Login
        </button>
      </header>
    </div>
  );
};

export default Navbar;
