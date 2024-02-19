import styled from 'styled-components';


type Clicked={isclicked?:boolean,abled?:boolean}

const PageNationBtn = styled.span<Clicked>`
display:${props=>props.abled?"none":""};
margin-right:5px;
width:52px;
padding:2px;
height:max-content;
color:${props=>props.isclicked?"#342628":"white"};
background-color:${props=>props.isclicked?"#FEAA00":"#342628"};
font-weight:${props=>props.isclicked?"bolder":"normal"};
`

interface PageNationBtnType{
  commentpageData:number|undefined;
  backchangePage:()=>void;
  frontchangePage:()=>void;
  first?:boolean;
  last?:boolean;
}
export function PageNationBox ({commentpageData,backchangePage,frontchangePage,first,last}:PageNationBtnType){
  if(typeof commentpageData==="undefined"){
    return<div style={{ display: "flex", paddingTop:"10px",paddingBottom:"10px"}}>댓글이 존재하지 않습니다. </div>
  }else{
  return(
<div style={{ display: "flex", paddingTop:"20px",paddingBottom:"20px"}}>
      <PageNationBtn  abled={first} onClick={backchangePage} >이전</PageNationBtn>
        <PageNationBtn isclicked={true}>{commentpageData+1}</PageNationBtn>
        <PageNationBtn abled={last} onClick={frontchangePage}>다음</PageNationBtn>
     </div>
  )}
}

