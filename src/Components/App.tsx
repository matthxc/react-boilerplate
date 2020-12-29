import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '@Pages/HomePage';

export const App: React.FC<{}> = () => {
  React.useEffect(() => {
    document
      .querySelector('.PageLoader--initial-load')
      ?.classList.add('loaded');
  }, []);

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
};

export default App;
