import { useEffect, useState } from "react";
import styled from "styled-components";

interface TransTextProps {
  children: string;
}

const splitText = (text: string, digitWith: string = "") => {
  return text.split(digitWith);
};

const koLang = "ㄱ,ㄴ,ㄷ,ㄹ,ㅁ,ㅂ,ㅅ,ㅇ,ㅈ,ㅊ,ㅋ,ㅌ,ㅍ,ㅎ";

const TransText: React.FC<TransTextProps> = ({ children }) => {
  const [displayText, setDisplayText] = useState("");
  const [fullText, setFullText] = useState<string>(children);
  const [textIdx, setTextIdx] = useState(0);

  useEffect(() => {
    // let ticker = setInterval(()=>)
    let ticker = setInterval(() => {
      setTextIdx((prev) => ++prev);
    }, 1000);

    return () => {
      clearInterval(ticker);
    };
  }, []);

  return <>{fullText.substring(0, textIdx)}</>;
};

const TextLibraryPage = () => {
  return (
    <Container>
      <Section>
        <Title>
          <TransText>타이틀 타이틀 타이틀</TransText>
        </Title>
        <Text>텍스트 텍스트</Text>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Section = styled.section``;
const Title = styled.h1``;
const Text = styled.p``;

export { TextLibraryPage };
