import React, { useEffect } from "react";
import { baseUrl } from "./service/baseUrl";
import axios from "axios";
import { getBookData } from "./service/book.service";

const App = () => {
  useEffect(() => {
    (async () => {
      await getBookData("/products");
    })();
  }, []);

  return <div>App</div>;
};

export default App;
