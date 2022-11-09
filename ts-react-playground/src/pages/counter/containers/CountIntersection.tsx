import { useEffect, useRef } from "react";
import styled from "styled-components";

import useCountDown from "../hooks/useCountDown";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import Fade from "../components/Fade";
import TestComponent from "../components/TestComponent";

const CountIntersection = () => {
  const { count, startCountDown, resetCountDown } = useCountDown({
    countStart: 100,
    countStop: 102,
    intervalMS: 1000,
  });
  return (
    <Container>
      <Fade threshold={0.3} translateY={"30px"} freezeOnceVisible>
        <TestComponent />
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fd7575;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CountIntersection;
