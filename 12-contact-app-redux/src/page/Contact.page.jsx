import React, { useEffect, useState } from "react";
import { getContactData, deleteContact } from "../service/contact.service";
import { ContactCardComponent, LoadingComponent } from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const [deleteItems, setDeleteItems] = useState(false);

  const handleDelete = async (id) => {
    const res = await deleteContact(id);
    setDeleteItems((pre) => !pre);
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
  }, [deleteItems]);

  return (
    <div className=" w-full h-full mx-3 lg:mx-0 flex flex-col justify-center items-center">
      {items.loading ? (
        <LoadingComponent />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <>
              {items.data.map((item) => (
                <ContactCardComponent
                  key={item.id}
                  handleDelete={handleDelete}
                  data={item}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
