// import {} from 'react';
import styled from "styled-components";
// import CountSection from "./containers/CountSection";
import CountIntersection from "./containers/CountIntersection";

const CounterPage = () => {
  return (
    <Container>
      <EmptySection />
      <CountIntersection />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500vh;
`;

const EmptySection = styled.section`
  width: 100%;
  height: 1200px;
  background-color: #cccccc;
`;

export default CounterPage;
