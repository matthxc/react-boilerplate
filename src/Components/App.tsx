// External libraries
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import { PageLoader } from '@Components/Loader';
import HomePage from '@Pages/HomePage';

export const App: React.FC<{}> = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    document
      .querySelector('.PageLoader--initial-load')
      ?.classList.add('loaded');
    setIsMounted(true);
  }, []);

  return (
    <>
      {!isMounted && <PageLoader />}
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
