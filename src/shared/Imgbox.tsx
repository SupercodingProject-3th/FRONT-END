import styled from 'styled-components';
type ImgBoxType={size?:string};

export const ImgBox = styled.div<ImgBoxType>`
width:${(props)=>(props.size? props.size:"55px")};
height:${(props)=>(props.size? props.size:"55px")};
border-radius: 50%;
overflow: hidden;
margin: 10px;
img {
    width:100%;
    height:100%;
  }`