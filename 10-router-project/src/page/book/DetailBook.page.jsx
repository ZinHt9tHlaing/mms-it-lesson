import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../../store/ApiContext";

const DetailBookPage = () => {
  const { slug } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState(null);
  const { data, error, loading } = useContext(ApiContext);

  useEffect(() => {
    const finder = data?.find((i) => i.slug === slug);
    setItem(finder);
  }, [slug, data]);

  const handleBack = () => {
    nav(-1);
  };

  console.log(slug);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="pb-5 flex justify-center items-center">
              <div className=" dark:bg-gray-800 dark:border-gray-700 w-[500px] rounded-xl">
                <div className=" p-2 w-[500px] h-[500px] border-b border-dotted border-b-gray-600 mb-5">
                  <div className="hover:scale-95 hover:duration-300 p-1 cursor-pointer">
                    <img
                      className=" rounded-lg"
                      src="https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="barna.jpg"
                    />
                  </div>
                  <div className="mb-1 p-2 ">
                    <h1 className="text-2xl font-bold text-white p-1 hover:bg-gray-700 rounded-md">
                      {item?.book}
                    </h1>
                    <h2 className="text-sm text-gray-500 hover:bg-gray-700 hover:text-gray-300 p-2 rounded-md">
                      {item?.author}
                    </h2>
                  </div>
                  <div className="p-2">
                    <p className=" text-gray-300 p-1 text-sm hover:bg-gray-800 rounded-md">
                      {item?.description}
                    </p>
                  </div>
                </div>
                <div className=" text-end">
                  <button
                    onClick={handleBack}
                    className=" bg-black mb-5 me-2 w-20 text-white py-2 rounded-lg active:scale-90 hover:duration-300"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
