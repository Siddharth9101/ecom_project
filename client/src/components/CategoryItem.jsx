import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;
const Image = styled.img`
  opacity: 0.9;
  width: 100%;
  height: 100%;
  object-fit: contain;

  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  z-index: 2;
  font-size: 25px;
  margin-bottom: 20px;
  color: white;
  font-weight: 900;

  ${mobile({ fontSize: "20px" })}
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  color: grey;
  font-weight: 600;
  padding: 10px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.image} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
