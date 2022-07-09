import React from 'react';
import ReactDom from 'react-dom';
import Main from './pages/Main';

import GlobalStyle from './styles/global';

ReactDom.render(
    <React.StrictMode>
      <GlobalStyle />
      <Main />     
    </React.StrictMode>,
    document.getElementById("root")
);