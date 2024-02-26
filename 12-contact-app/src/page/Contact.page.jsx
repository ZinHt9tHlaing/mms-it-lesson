import React, { useEffect, useState } from "react";
import { getContactData, deleteContact } from "../service/contact.service";
import { ContactCardComponents, LoadingComponents } from "../components";
import { useGetContactQuery } from "../store/services/endpoints/contact.endpoint";

const ContactPage = () => {
  const { isError, isLoading, data, isSuccess } = useGetContactQuery();

  console.log(isError, isLoading, data, isSuccess);

  const [deleteItem, setDeleteItem] = useState(false);

  const handleDelete = async (id) => {
    setItems((pre) => ({ ...pre, loading: true }));
    await deleteContact(id);
    setDeleteItem((pre) => !pre);
  };

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [deleteItem]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <>
          {isError ? (
            <h1>{isError.message}</h1>
          ) : (
            data.contacts.data.map((item) => (
              <ContactCardComponents
                handleDelete={handleDelete}
                data={item}
                key={item.id}
              />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
