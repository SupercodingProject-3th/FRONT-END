
import {useSearchParams } from 'react-router-dom';
import CommentList from '../../components/DetailPage/CommentList';
import styled from "styled-components";
import { media } from "../../styles/media";
import { DARK_GREY, WHITE } from "../../styles/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import DetailPageSummary from '../../components/DetailPage/DetailPageSummary';
import RelativePosting from '../../components/DetailPage/RelativePosting';

const DetailPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postId=Number(searchParams.get('postId'))
  const userId= Number(localStorage.getItem("userId"))
  
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );
  return (
    <div>
    <StyledPage isDarkMode={isDarkMode}>
      <Header></Header>
      <Wrapper>
        <DetailPageSummary postId={postId} userId={userId}></DetailPageSummary>
        <RelativePosting postId={postId}></RelativePosting>
        <CommentList  child={false} postId={postId} contact_user={userId}></CommentList>
      </Wrapper>
      <Footer></Footer>
    </StyledPage>
    </div>
  );
}; 

export default DetailPage;


const StyledPage = styled.div<{ isDarkMode: boolean }>`
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
  width: 100vw;
  display: flex;
  flex-direction: column;

  ${media.mobile} {
    font-size: 11px;
  }

  ${media.tablet} {
    font-size: 12px;
  }

  ${media.desktop} {
    font-size: 14px;
  }
`;
const Wrapper = styled.div`
  width:100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;

`;