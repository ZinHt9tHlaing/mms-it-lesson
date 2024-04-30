import React, { useEffect, useState } from "react";
import { getContactData, deleteContact } from "../service/contact.service";
import { ContactCardComponent, LoadingComponent } from "../components";
import { useGetContactQuery } from "../store/endpoints/contact.endpoint";

const ContactPage = () => {
  const { isLoading, isError, isSuccess, data } = useGetContactQuery();

  const [deleteItems, setDeleteItems] = useState(false);

  const handleDelete = async (id) => {
    await deleteContact(id);
    setDeleteItems((pre) => !pre);
  };

  return (
    <div className=" w-full h-full mx-3 lg:mx-0 flex flex-col justify-center items-center">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {isError ? (
            <h1>{isError.message}</h1>
          ) : (
            <>
              {data.contacts.data.map((item) => (
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
