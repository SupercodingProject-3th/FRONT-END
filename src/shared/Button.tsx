import styled from "styled-components";
import { DEEP_YELLOW, DARK_GREY, WHITE } from "../styles/colors";

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${DEEP_YELLOW};
  color: ${WHITE};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${DARK_GREY};
  }
`;

export default Button;
