// External libraries
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

// Components
import { PageLoader } from '@Components/Loader';
import { HomePage } from '@Pages/HomePage';

const NotFoundPage = loadable(
  () => import(/* webpackChunkName: "404" */ '@Pages/NotFound'),
  {
    fallback: <PageLoader />,
  },
);

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
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
