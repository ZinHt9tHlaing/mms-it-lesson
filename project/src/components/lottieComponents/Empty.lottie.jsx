import React from "react";
import Lottie from "lottie-react";
import EmptyJson from "../../lottie/empty.json";

const EmptyLottie = () => {
  return (
    <div>
      <Lottie
        className=" w-[300px] h-[300px]"
        animationData={EmptyJson}
        loop
        size={50}
      />
    </div>
  );
};

export default EmptyLottie;
