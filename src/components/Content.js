import React from "react";

const Content = ({ children }) => {
  return (
    <main className="bg-darkGreyColor flex flex-col justify-center items-center w-full mx-6 rounded-xl py-6  ds:w-1/4 xl:w-1/2 lg:w-1/2 ">
      {children}
    </main>
  );
};

export default Content;
