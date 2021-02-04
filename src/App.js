import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuNavbar from './components/MenuNavbar';
import Footer from './components/Footer';

import s from './style.module.css'

const App = () => {
  const match = useRouteMatch ('/');

  return ( 
    
      <Switch>
        <Route path='/404' render={() => (
          <h1>404 Not Found</h1>
        )} />
        <Route>
          <>
            <MenuNavbar bgActive={!match.isExact} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact
            })}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" render={() => (
                  <h1>This is page About</h1>
                )}/>
                <Route render={() => (
                  <Redirect to='/404' />
                )}/>
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
        
      </Switch>

  )
};

export default App;