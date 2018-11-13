import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/productlist';
import Wishlist from './components/wishlist';
import {Provider} from 'react-redux';
import store from  './components/redux-files/store';
/**
* This component is the route component of the project
*
* @version 1.0.1
*/

ReactDOM.render(
<Provider store={store}>
<Router>
    <div>
      <Route exact path="/" component={Products} />
      <Route path="/wishlist" component={Wishlist} />
     </div>
   </Router>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
