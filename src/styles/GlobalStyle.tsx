import { createGlobalStyle} from 'styled-components'
import { WHITE}from './colors'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

  body {
    background-color: ${WHITE};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;