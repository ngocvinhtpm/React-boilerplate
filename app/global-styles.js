import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  li {
    display: inline-block;
    padding: 40px;
}
.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters {
  background-color: #0087ff96;
}
a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}
.footer {
  background-color: #00ff74;
  height: 50px;
}

.footer p {
  text-align: center;
  padding-top: 10px;
}
`;

export default GlobalStyle;

