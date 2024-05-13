import React, { useContext, useEffect, useRef, useState } from "react";
import StarRating from "../StarRating";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";
import AnimatedImage from "../animateImg/animatedImage";

const Products = ({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
}) => {
  const { addCart, deleteCart } = useContext(DataContext);

  const [added, setAdded] = useState(false);
  const [animated, setAnimated] = useState(false);

  const handleAddToCart = () => {
    // console.log("add");
    if (!added) {
      const newCart = {
        product_id: id,
        title,
        price,
        image,
        quantity: 1,
        cost: price,
      };
      addCart(newCart);
      setAdded(true);
      setAnimated(true);
    } else if (deleteCart(id)) {
      setAdded(false);
      setAnimated(false);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Already Added",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const [info, setInfo] = useState({});

  const imgRef = useRef();

  useEffect(() => {
    setInfo(imgRef.current.getBoundingClientRect());
  }, []);

  return (
    <div className="product-card group">
      <img
        className="product-card-img group-hover:scale-110 group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
        src={image}
        ref={imgRef}
      />
      {animated && (
        <AnimatedImage src={image} info={info} setAnimated={setAnimated} />
      )}
      <div className="product-card-body border border-neutral-600 p-5">
        <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
          {title}
        </p>
        <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
          <div className="rating-stars flex gap-1">
            <StarRating rate={rate} />
          </div>
          <p className="rating-text">
            ({rate} / {count})
          </p>
        </div>
        <p className="product-card-price font-heading font-bold text-xl mb-3">
          $ <span className="price">{price}</span>
        </p>
        <button
          onClick={handleAddToCart}
          className={` ${
            added && "bg-neutral-600 text-white select-none"
          } duration-200 active:scale-95 border border-neutral-600 block w-full h-12 font-heading`}
        >
          {added ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Products;
