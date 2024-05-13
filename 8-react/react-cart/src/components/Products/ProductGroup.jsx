import React, { useEffect, useState } from "react";
import Container from "../Container";
import { productApi } from "../../api/product";
import Products from "./Products";
import ProductLoader from "./ProductLoader";

const ProductGroup = () => {
  const [products, setProduct] = useState([]);
  const [ready, setReady] = useState(false);

  const loaders = Array.from({ length: 7 }, (_, index) => index);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productApi.get("/");
      setProduct(res.data);
      setReady(true);
    };
    fetchProduct();
  }, []);

  return (
    <section className="product-list mb-10">
      <Container>
        <div
          id="productList"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {!ready && (
            <>
              {loaders.map((loader) => (
                <ProductLoader key={loader} />
              ))}
            </>
          )}
          {ready &&
            products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
