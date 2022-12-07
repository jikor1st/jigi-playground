import { useEffect, useState, useRef, useCallback } from "react";
import Lottie from "react-lottie";

import styled from "@emotion/styled";
import useLottieOptions from "../hooks/useLottieOptions";
import animationData from "../lotties/favorites.json";

interface ToggleFavorites {
  isLike: boolean;
  onClick: () => void;
}

const ToggleFavorites = ({ isLike, onClick }: ToggleFavorites) => {
  const { lottieOptions, setLottieOptions } = useLottieOptions({
    isStopped: true,
    isPaused: false,
    speed: 2.5,
    direction: 1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
  };

  const handleChangeLike = useCallback(() => {
    if (isLike) {
      setLottieOptions({ direction: 1 });
    } else {
      setLottieOptions({ direction: -1 });
    }
    setLottieOptions({ isStopped: false });
  }, [isLike]);

  useEffect(() => {
    handleChangeLike();
  }, [isLike]);

  return (
    <LikeButton onClick={onClick}>
      <Lottie
        options={defaultOptions}
        width={100}
        height={100}
        isStopped={lottieOptions.isStopped}
        isPaused={lottieOptions.isPaused}
        speed={lottieOptions.speed}
        direction={lottieOptions.direction}
      />
    </LikeButton>
  );
};

export default ToggleFavorites;

const LikeButton = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: unset;
  text-align: center;
  cursor: pointer;
`;
