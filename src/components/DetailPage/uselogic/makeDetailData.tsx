import React from 'react';
import { DetailDataType } from './fetchDetailData';



const makeDetailData = (data:DetailDataType) => {
  return (
    [
      {
        title:"연락처",
        content:data.contactNum
      },
      {
        title:"카테고리",
        content:data.category
      },
      {
        title:"메뉴",
        content:data.menu
      },
      {
        title:"내용",
        content:data.content
      },
    ]
  );
}

export default makeDetailData;