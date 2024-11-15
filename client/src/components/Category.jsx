import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Category;
