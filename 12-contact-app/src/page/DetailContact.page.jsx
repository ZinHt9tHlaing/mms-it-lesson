import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../service/contact.service";
import { ContactCardComponents, LoadingComponents } from "../components";


const DetailContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getSingleContact(id);
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [id]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-xl bg-gray-600 text-white ">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <div>
              <h1>{items.data.name}</h1>
              <h1>{items.data.phone}</h1>
              <h1>{items.data.email}</h1>
              <h1>{items.data.address}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailContactPage;
