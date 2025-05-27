import React from "react";
import Page from "./Page";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";

const Pagination = () => {
  return (
    <div className="flex justify-between w-fit lg:h-16 md:h-12 lg:gap-6 md:gap-2 items-center">
      <Page icon={<RiArrowLeftSFill />} />
      <Page num="01" />
      <Page num="02" />
      <Page num="03" />
      <Page num="04" />
      <Page num="05" />
      <Page icon={<RiArrowRightSFill />} />
    </div>
  );
};

export default Pagination;
