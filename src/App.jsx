import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Pagination from "./Components/Pagination";
import DisplayCard from "./Components/DisplayCard";

function App() {
  return (
    <div className="w-full h-full bg-white p-0 ">
      <Header />
      <div className="w-full grid lg:grid-cols-[384px_1fr] lg:grid-rows-1 grid-cols-1 grid-rows-[250px_1fr]  lg:gap-col-12 gap-row-1   mt-44 lg:pl-40 pl-4 ">
        <div className=" lg:mt-24 flex flex-col gap-4 w-96 shrink-0 ">
          <h1 className="text-textDark  font-amiri text-6xl leading-normal font-bold">
            Our Cars
          </h1>
          <p className="text-base text-textDark font-publicSans font-normal">
            Explore our stunning collection of iconic cars that showcase power,
            luxury, and performance. Slide through to discover your dream ride.
          </p>
        </div>
        <div className="w-full flex flex-col gap-10 justify-start overflow-hidden">
          <Pagination />
          <DisplayCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
