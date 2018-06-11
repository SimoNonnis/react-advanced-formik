import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Vendors from 'pages/Vendors';

export default function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) => {
            const propertyId = match.params.id;
            return <Vendors propertyId={propertyId} />;
          }}
        />
      </Switch>
    </div>
  );
}
