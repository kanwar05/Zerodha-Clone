import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto mb-5 pb-[100px]">
        <div className="flex flex-col items-center text-center">
          <div className="mt-[20px]">
            <h2 className="text-[28px] m-[0] mt-[20px] ">
              404 Not Found
            </h2>
            <p className="text-[16px] mt-[10px] mb-[15px] text-muted py-4">
              Sorry , the page you are looking for does not exist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
