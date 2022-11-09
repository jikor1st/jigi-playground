import styled from "styled-components";
const TestComponent = () => {
  return (
    <Container>
      <Image />
    </Container>
  );
};

const Container = styled.div``;

const Image = styled.div`
  width: 150px;
  height: 0;
  padding-top: 100%;
  background-color: #ffffff;
`;

export default TestComponent;
