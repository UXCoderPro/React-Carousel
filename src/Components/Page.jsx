import React from "react";

const Page = ({ num, icon }) => {
  return (
    <div className="lg:w-16 lg:h-16 h-12 w-12 cursor-pointer hover:bg-active flex justify-center items-center">
      {icon ? (
        icon
      ) : (
        <p className="text-textDark font-publicSans lg:text-xl text-base font-normal">
          {num}
        </p>
      )}
    </div>
  );
};

export default Page;
