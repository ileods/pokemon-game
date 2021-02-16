import { useLocation, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuNavbar from './components/MenuNavbar';
import Footer from './components/Footer';
import NotFoundPage from './routes/NotFound';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';

import s from './style.module.css';
import { FireBaseContext } from './context/firebaseContext';
import FirebaseCLass from './service/firebase'

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return ( 
    <FireBaseContext.Provider value={FirebaseCLass}>
      <Switch>
        <Route component={NotFoundPage} path="/NotFound" />
        <Route>
          <>
            <MenuNavbar bgActive={!isPadding} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding
            })}>
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/home" component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route render={() => (
                  <Redirect to='/NotFound' />
                )}/>
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
        
      </Switch>
    </FireBaseContext.Provider>
      

  )
};

export default App;