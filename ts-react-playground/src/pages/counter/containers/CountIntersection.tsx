import { useState } from "react";
import styled from "styled-components";

import Fade from "../components/Fade";
import TestComponent from "../components/TestComponent";

const CountIntersection = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      <Fade
        threshold={0.5}
        translateY={"30px"}
        freezeOnceVisible={true}
        onChangeEntry={(entry) => {
          const isVisible = !!entry?.isIntersecting;
          setIsVisible((prev) => (prev !== isVisible ? isVisible : prev));
        }}
      >
        <TestComponent isVisible={isVisible} />
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
