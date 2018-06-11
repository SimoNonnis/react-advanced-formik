import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '@housesimple/redux';
import { theme } from '@housesimple/react-components';

import { ThemeProvider, injectGlobal } from 'styled-components';
import store from './store';
import App from './App';

injectGlobal([
  `
  body, html {
    font-size: 14px;
    font-family: proxima-nova, sans-serif;
    margin: 0;
  };
`,
]);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => render());
}
