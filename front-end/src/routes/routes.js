import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { url } from './url';

const Home = lazy(() => import('../components/screens/home'));
const Mannschaft = lazy(() => import('../components/screens/mannschaft'));
const Notruf = lazy(() => import('../components/screens/notruf'));



export const Main = () => (
  <main>
    <Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route exact path={url[0]} component={props => <Home {...props} />} />
        <Route exact path={url[1]} component={props => <Mannschaft {...props} />} />
        <Route exact path={'/notruf'} component={props => <Notruf {...props} />} />
      </Switch>
    </Suspense>

  </main>
);
