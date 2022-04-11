import * as React from "react";
import "./style.scss";

const Loader = (): JSX.Element => {
  return (
    <div className="w-full h-94 flex justify-center flex-wrap">
      <div className="loader-wrapper loader-wrapper--2">
        <div className="loader loader--2">
          <div className="circle-line"></div>
          <div className="circle-line"></div>
          <div className="circle-line"></div>
          <div className="circle-line"></div>
          <div className="circle-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
