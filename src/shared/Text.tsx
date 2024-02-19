
import styled from "styled-components";

type TextStyle = { size?: string; bold?: boolean };

const GrayText = styled.span<TextStyle>`
width: max-content
  margin: 0px 3px 0px 3px;
  color: gray;
  font-weight: ${(props) => (props.bold ? "bolder" : "normal")};
  font-size: ${(props) => (props.size ? props.size : "15px")};
`;

const BlackText = styled(GrayText)`
  color: black;
`;

const GrayBtn = styled(GrayText)`
  &:hover {
    font-weight: bolder;
    color: black;
  }
`;

const BlackBtn = styled(GrayBtn)`
  color: black;
`;
export { GrayText, BlackText, GrayBtn, BlackBtn };
