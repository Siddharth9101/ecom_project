// import SearchIcon from "@mui/icons-material/Search";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
  // background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  margin-left: 25px;
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
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>
            EN
            <SearchContainer>
              <Input />
              {/* <SearchIcon /> */}
              <IoSearchOutline style={{ color: "grey", fontSize: "16" }} />
            </SearchContainer>
          </Languages>
        </Left>
        <Center>
          <Logo>E-Comm</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>LogIn</MenuItem>
          <MenuItem>
            <Badge>4</Badge>
            <IoCartOutline size={24} />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
