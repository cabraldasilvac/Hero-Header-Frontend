import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main';
import App from './pages/Main';

import GlobalStyle from './sytles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>

)
