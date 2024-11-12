import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
// import { useEffect, useState } from "react";
// import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products/category/mens-shirts")
  //     .then((res) => console.log(res.data.products))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
