import React, { useRef } from "react";
import styled, { css } from "styled-components";

import useIntersectionObserver, {
  IOOptions,
} from "../hooks/useIntersectionObserver";

interface FadeOptions {
  translateY?: `${number}px` | `${number}%`;
  duration?: `${number}ms` | `${number}s`;
  timingFunction?: string;
}

interface FadeProps extends IOOptions, FadeOptions {}

const Fade: React.FC<React.PropsWithChildren<FadeProps>> = ({
  children,
  translateY,
  duration,
  timingFunction,
  ...iOOptions
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(containerRef, iOOptions);
  const isVisible = !!entry?.isIntersecting;

  const fadeOptions = { translateY, duration, timingFunction };
  return (
    <Container ref={containerRef} fadeIn={isVisible} {...fadeOptions}>
      {children}
    </Container>
  );
};

interface ContinerProps extends FadeOptions {
  fadeIn: boolean;
}
const Container = styled.div<ContinerProps>`
  transition-property: all;
  transition-timing-function: ${({ duration }) => duration ?? "0.5s"};
  transition-duration: ${({ duration }) => duration ?? "0.5s"};
  ${({ fadeIn, translateY }) =>
    fadeIn
      ? css``
      : css`
          transform: translateY(${translateY ?? "20px"});
          opacity: 0;
        `}
`;

export default Fade;
