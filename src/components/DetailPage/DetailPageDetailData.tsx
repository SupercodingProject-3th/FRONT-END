
import { type } from "os";
import styled from "styled-components";
import makeDetailData from './uselogic/makeDetailData';
import { DetailDataType } from "./uselogic/fetchDetailData";


export type DetailPageDetailDataType={title:string; content:string;}[]


export const DetailPageDetailData : React.FC<{ data: DetailDataType}>=({data})=>{
  let madeDetailData= makeDetailData(data)
  return(

<table style={{width:"100%"}}>
  <tbody>
  {madeDetailData.map((data, index)=>{
    return<DetailDataContainer
    key={index} title={data.title} content={data.content} ></DetailDataContainer>
  })}
  </tbody>
</table>)}



interface DetailDataContainerType{
  title:string,
  content:string,
 
}
const DetailDataContainer=({title,content}:DetailDataContainerType)=>{
  return(
  <DetailDataBox style={{fontSize:"18px"}}>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </DetailDataBox>
)
}

const Content=styled.td`
text-align:start;
font-size:22px;
`


const Title=styled(Content)`
width:max-content;
font-weight:bolder;
si
`
const DetailDataBox=styled.tr`
:28px;
 th {
      scope:row;
    }
`