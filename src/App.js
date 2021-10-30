import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer/Footer';
import AddService from './components/pages/AddService/AddService';
import Login from './components/pages/Login/Login';
import ContextProvider from './components/ContextApi/ContextProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyBooking from './components/pages/MyBooking/MyBooking';
import ManageAllBooking from './components/pages/ManageAllBooking/ManageAllBooking';
import Booking from './components/pages/Booking/Booking';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/add-service'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/my-booking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute path='/manage-booking'>
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
