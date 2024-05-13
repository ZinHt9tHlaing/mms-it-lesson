import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context/DataContext";

const AnimatedImage = ({ src, info, setAnimated }) => {
  const styles = {
    width: info.width + "px",
    height: info.height + "px",
    left: info.left + "px",
    top: info.width + "px",
  };

  const imgRef = useRef();

  const { cartBtnInfo } = useContext(DataContext);

  useEffect(() => {
    const keyframe = [
      {
        top: info.top + "px",
        left: info.left + "px",
      },
      {
        top: cartBtnInfo.top + 10 + "px",
        left: cartBtnInfo.left + 10 + "px",
        width: 10 + "px",
        height: 10 + "px",
        rotate: "2turn",
      },
    ];
    const options = {
      duration: 800,
      iterations: 1,
      fill: "both",
    };

    const animation = imgRef.current.animate(keyframe, options);

    const run = () => {
      setAnimated(false);
    };

    animation.addEventListener("finish", run);

    return () => {
      animation.removeEventListener("finish", run);
    };
  }, []);

  return <img src={src} ref={imgRef} style={styles} className=" fixed z-40" />;
};

export default AnimatedImage;
