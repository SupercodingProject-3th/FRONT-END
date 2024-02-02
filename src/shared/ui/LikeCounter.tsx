import styled from "styled-components";

interface LikeCounterProps {
  likes: string[];
  width: number;
}

const LikeCounter = ({ likes, width }: LikeCounterProps) => {
  return (
    <LikeContainer>
      <Image
        src="../../shared/images/goodRestaurant/heart_full.svg"
        width={width}
        height={(width * 8) / 7}
        style={{ marginRight: "0.5rem" }}
      />
      <Count>{likes.length.toLocaleString()}</Count>
    </LikeContainer>
  );
};

export default LikeCounter;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 0.5rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
  }
`;

const Count = styled.span`
  font-size: 14px;
  margin-right: 0.2rem;
`;

const Image = styled.img`
`
