import React from 'react';
import { render } from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '@housesimple/redux';
import store from 'store';

import Vendors from 'pages/Vendors';

import { theme } from '@housesimple/react-components';
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal([
  `
  .logo img {
    max-width: 190px;
  }

  .ReactModal__Content,
  #app {
    font-family: proxima-nova, sans-serif;

    h1, h2, h3 {
      font-family: proxima-nova, sans-serif;
    };

    h1 {
      font-size: 30px;
    };

    h2 {
      font-size: 25px;
    };

    p {
      font-size: 14px;
      line-height: 24px;
    };

    input[type="date"] {
      line-height: 24px;
    }
  };
`,
]);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            path="/admin/property/:id/people"
            exact
            render={({ match }) => {
              const propertyId = match.params.id;
              return <Vendors propertyId={propertyId} />;
            }}
          />
        </Switch>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
