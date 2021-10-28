import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import Order from './components/pages/Order/Order';
import AddService from './components/pages/AddService/AddService';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/order'>
            <Order></Order>
          </Route>
          <Route path='/add-service'>
            <AddService></AddService>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
