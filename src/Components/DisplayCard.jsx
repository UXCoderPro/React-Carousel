import React from "react";
import CarInfo from "../Data/CarInfo";

const DisplayCard = () => {
  return (
    <div className="w-full lg:h-96 h-64 flex justify-start items-start  overflow-hidden   lg:gap-6 gap-3">
      {CarInfo.map((items) => (
        <div
          className="lg:w-96 w-64 h-full relative group shrink-0 flex  bg-center bg-cover flex-col  justify-end "
          key={items.id}
          style={{ backgroundImage: `url(${items.img})` }}
        >
          <div className="w-full absolute bottom-0 left-0  translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out  h-auto flex flex-col backdrop-blur-[6.5px] items-center px-6 py-8 lg:rounded-[30px_30px_0px_0px] rounded-[18px_18px_0px_0px] bg-hoverBg">
            <h1 className="text-white font-amiri lg:text-4xl text-2xl font-normal leading-normal">
              {items.name}
            </h1>
            <p className="font-publicSans text-center text-white lg:text-lg text-sm font-normal leading-normal">
              {items.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
