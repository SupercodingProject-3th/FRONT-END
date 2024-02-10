import React, { useState } from 'react';
import styled from 'styled-components';

import filledStar from '../../assets/icon/filled-star.svg';
import halfStar from '../../assets/icon/half-star.svg';
import outlineStar from '../../assets/icon/outline-star.svg';

const StarRating: React.FC<{ rating: number | null; onChange: (value: number | null) => void }> = ({ rating, onChange }) =>  {
  const [localRating, setLocalRating] = useState<number | null>(rating);

  const handleStarClick = (value: number) => {
    // 클릭한 별이 현재 선택된 별과 같고, 이미 반 별인 경우
    if (value === localRating && value % 1 !== 0) {
      // 선택을 해제합니다.
      setLocalRating(Math.floor(value));
      onChange(Math.floor(value));
    } else {
      // 그 외의 경우에는 해당 별을 선택합니다.
      setLocalRating(value);
      onChange(value);
    }
  };

  const getStarImage = (value: number) => {
    return (
      <Star key={value} onClick={() => handleStarClick(value)}>
        {value <= (localRating ?? 0) ? (
          // 클릭한 별보다 작거나 같은 별은 색이 칠해진 상태로 표시됩니다.
          value === Math.ceil(localRating ?? 0) && value % 1 !== 0 ? (
            <img src={halfStar} alt="half-star" />
          ) : (
            <img src={filledStar} alt="filled-star" />
          )
        ) : (
          // 클릭한 별보다 큰 별은 테두리만 있는 상태로 표시됩니다.
          <img src={outlineStar} alt="outline-star" />
        )}
      </Star>
    );
  };

  return (
    <StarRatingContainer>
      {[1, 2, 3, 4, 5].map((value) => getStarImage(value))}
    </StarRatingContainer>
  );
};

const StarRatingContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Star = styled.span`
  cursor: pointer;
`;

export default StarRating;
