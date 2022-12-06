import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

import ToggleFavorites from "components/ToggleFavorites";

const LottiePage = () => {
  const [isLike, setIsLike] = useState(false);
  useEffect(() => {
    console.log("isLike:", isLike);
  }, [isLike]);
  return (
    <Container>
      <ToggleFavorites
        isLike={isLike}
        onClick={() => setIsLike(() => !isLike)}
      />
    </Container>
  );
};

export default LottiePage;

const Container = styled.div`
  padding: 200px;
`;
