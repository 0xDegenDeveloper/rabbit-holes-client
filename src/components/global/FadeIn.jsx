import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const FadeInWrapper = styled.div`
  opacity: 0;
  transition: opacity 0.3s ease-in;

  &.loaded {
    opacity: 1;
  }
`;

export default function FadeIn({ children, location }) {
  const wrapperRef = useRef();

  useEffect(() => {
    wrapperRef.current.classList.add("loaded");
    // setTimeout(() => {
    //   wrapperRef.current.classList.add("loaded");
    // }, 50);
  }, [location]);

  return (
    <FadeInWrapper ref={wrapperRef}>
      {React.cloneElement(children, { location })}
    </FadeInWrapper>
  );
}
