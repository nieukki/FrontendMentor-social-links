import React from "react";

const LinksSection = () => {
  return (
    <section className="flex flex-col justify-center items-center  w-full px-6 gap-y-4">
      <div className="bg-greyColor text-whiteColor flex items-center justify-center py-4 rounded-lg w-full cursor-pointer hover:bg-greenColor hover:text-offBlackColor">
        <p className="text-sm">GitHub</p>
      </div>
      <div className="bg-greyColor text-whiteColor flex items-center justify-center py-4 rounded-lg w-full cursor-pointer hover:bg-greenColor hover:text-offBlackColor">
        <p className="text-sm">Frontend Mentor</p>
      </div>
      <div className="bg-greyColor text-whiteColor flex items-center justify-center py-4 rounded-lg w-full cursor-pointer hover:bg-greenColor hover:text-offBlackColor">
        <p className="text-sm">LinkedIn</p>
      </div>
      <div className="bg-greyColor text-whiteColor flex items-center justify-center py-4 rounded-lg w-full cursor-pointer hover:bg-greenColor hover:text-offBlackColor">
        <p className="text-sm">Twitter</p>
      </div>
      <div className="bg-greyColor text-whiteColor flex items-center justify-center py-4 rounded-lg w-full cursor-pointer hover:bg-greenColor hover:text-offBlackColor">
        <p className="text-sm">Instagram</p>
      </div>
    </section>
  );
};

export default LinksSection;
