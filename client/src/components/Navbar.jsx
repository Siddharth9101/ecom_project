// import SearchIcon from "@mui/icons-material/Search";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;

  ${mobile({ height: "50px", width: "100vw" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Languages = styled.span`
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;

  ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Badge = styled.div`
  border-radius: 50%;
  height: 18px;
  width: 18px;
  background-color: yellow;
  position: absolute;
  top: -40%;
  right: -40%;
  text-align: center;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input placeholder="Search" />
            {/* <SearchIcon /> */}
            <IoSearchOutline style={{ color: "grey", fontSize: "16" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>eCart</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>LogIn</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge>{quantity}</Badge>
              <IoCartOutline size={24} />
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
