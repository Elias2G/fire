import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { url } from './url';

const Home = lazy(() => import('../components/screens/home'));
const Mannschaft = lazy(() => import('../components/screens/mannschaft'));
const Einsätze = lazy(() => import('../components/screens/einsätze'));
const Statistic = lazy(() => import('../components/screens/statistic'));
const Termine = lazy(() => import('../components/screens/termine'));
const Notruf = lazy(() => import('../components/screens/notruf'));
const Kontakt = lazy(() => import('../components/screens/kontakt'));
const Einsatzgebiet = lazy(() => import('../components/screens/einsatzgebiet'));


export const Main = () => (
  <main>
    <Suspense fallback={<div>...loading</div>}>
      <Switch>
        <Route exact path={url[0]} component={props => <Home {...props} />} />
        <Route exact path={url[1]} component={props => <Mannschaft {...props} />} />
        <Route exact path={url[2]} component={props => <Einsätze {...props} />} />
        <Route exact path={url[3]} component={props => <Statistic {...props} />} />
        <Route exact path={url[5]} component={props => <Termine {...props} />} />
        <Route exact path={'/notruf'} component={props => <Notruf {...props} />} />
        <Route exact path={'/kontakt'} component={props => <Kontakt {...props} />} />
        <Route exact path={'/einsatzgebiet'} component={props => <Einsatzgebiet {...props} />} />
      </Switch>
    </Suspense>
  </main>
);
