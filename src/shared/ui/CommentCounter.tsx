import { Comments } from "../../lib/index";
import styled from "styled-components";

interface CommentCounterProps {
  comments: Comments[];
  width: number;
}

const CommentCounter = ({ comments, width }: CommentCounterProps) => {
  return (
    <CommentContainer>
      <Image
        src="/images/recipe-view/comment.svg"
        alt="게시물 댓글 이미지"
        width={width}
        height={width}
        style={{ marginRight: "0.5rem" }}
      />
      <Count>{comments.length.toLocaleString()}</Count>
    </CommentContainer>
  );
};

export default CommentCounter;

const CommentContainer = styled.div`
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