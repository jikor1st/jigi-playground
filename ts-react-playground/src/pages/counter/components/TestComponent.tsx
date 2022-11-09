import styled from "styled-components";
import CountNumber from "./CountNumber";

interface TestComponentProps {
  isVisible: boolean;
}
const TestComponent = ({ isVisible }: TestComponentProps) => {
  return (
    <Container>
      <Image />
      <AwardWrapper>
        <Award>
          <strong>
            <CountNumber
              countStart={700}
              countStop={777}
              intervalMS={20}
              isIncrease
              start={isVisible}
            />
          </strong>
        </Award>
        <Award>
          <strong>
            <CountNumber
              countStart={900}
              countStop={999}
              intervalMS={20}
              isIncrease
              start={isVisible}
            />
          </strong>
        </Award>
      </AwardWrapper>
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
const AwardWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;
const Award = styled.p`
  margin: 10px 0;
  font-size: 20px;
  color: #ffffff;
`;

export default TestComponent;
