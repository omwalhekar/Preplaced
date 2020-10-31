import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Integrations from "./components/Integrations";
import Navigation from "./components/Navigation";
import Favorites from "./components/Favorites";
import './App.css';
import { Fragment, useEffect } from 'react';

//redux
import store from "./store";
import {Provider} from "react-redux";
import {getCards} from "./actions/integrations";
import {getFavcards} from "./actions/favorites";

const App= () => {
  useEffect(() =>{
    store.dispatch(getCards());
  }, []);

  store.dispatch(getFavcards());
  return (
    <Provider store={store} >
     <Router>
       <Fragment>
       <div className="container">
       <Navigation />
       <Switch>
            <Route exact path="/" component={Integrations}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
            </Switch>
       </div>
       
       </Fragment>
     </Router>    
     </Provider>
  );
}

export default App;
