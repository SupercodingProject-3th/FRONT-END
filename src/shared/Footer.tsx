import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styled from "styled-components";
import { DARK_GREY, WHITE, SOFT_BEIGE, BLACK} from "../styles/colors";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

//   import { mobile } from "../responsive";

const Footer = () => {
  const isDarkMode = useSelector(
    (state: RootState) => state.darkMode.isDarkMode
  );

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <FooterLayout>
        <Left>
          <Title isDarkMode={isDarkMode}>또간지도</Title>
          <Desc isDarkMode={isDarkMode}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <FaPinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Right>
          <Title isDarkMode={isDarkMode}>Contact</Title>
          <ContactItem isDarkMode={isDarkMode}>
            <FaMapMarkerAlt style={{ marginRight: "10px" }} /> Mapo-gu, Seoul,
            South of Korea
          </ContactItem>
          <ContactItem isDarkMode={isDarkMode}>
            <FaPhone style={{ marginRight: "10px" }} /> +82-010-000-0000
          </ContactItem>
          <ContactItem isDarkMode={isDarkMode}>
            <FaEnvelope style={{ marginRight: "10px" }} />{" "}
            againfoodmap@naver.com
          </ContactItem>
        </Right>
      </FooterLayout>
    </FooterContainer>
  );
};

const FooterContainer = styled.div<{ isDarkMode: boolean }>`
  background-color: ${(props) => (props.isDarkMode ? DARK_GREY : WHITE)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row; /*NORE: 화면이 768px 이상이면 가로로 나열 */
  }

  position: relative; /*NOTE: 문제생기면 여기서 해결할 것 fixed에서 변경*/
  bottom: 0;
  left: 50%; /* NOTE:가로 중앙 정렬을 위해 left 속성 추가 */
  transform: translateX(-50%); /* NOTE:가로 중앙 정렬을 위해 transform 추가 */
  width: 100%;
  z-index: 9990;
`;

const FooterLayout = styled.div`
  margin: 0 auto;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.h1<{ isDarkMode: boolean }>`
  color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
`;

const Desc = styled.p<{ isDarkMode: boolean }>`
  margin: 20px 0px;
  font-size: 20px;
  color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div<{ isDarkMode: boolean }>`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isDarkMode ? WHITE : BLACK)};
`;

const Payment = styled.img`
  width: 50%;
`;

export default Footer;
