import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

interface SkeletonProps {
  width?: string;
  height?: string;
}

const Skeleton = styled.div<SkeletonProps>`
  background-color: gray;
  animation: ${opacity} 2s ease-in-out 0.5s infinite;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 10px;
`;

export default Skeleton;