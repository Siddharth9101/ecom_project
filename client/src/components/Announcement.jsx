import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  font-weight: 500;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Announcement = () => {
  return (
    <Container>Super Deal!! Free Shipping on Order Over Rs.2000</Container>
  );
};

export default Announcement;
