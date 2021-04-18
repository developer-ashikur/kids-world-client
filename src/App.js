import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Book from './components/Dashboard/Book/Book';
import Bookings from './components/Dashboard/Bookings/Bookings';
import Review from './components/Dashboard/Review/Review';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import ManageService from './components/Dashboard/ManageService/ManageService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    role: ''
});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path='/book/:id'>
          <Book />
        </PrivateRoute>
        <PrivateRoute path='/book'>
          <h1 className='text-center'>Please Select an Item From Our Services to Book.</h1>
        </PrivateRoute>
        <PrivateRoute path='/bookings'>
          <Bookings />
        </PrivateRoute>
        <PrivateRoute path='/review'>
          <Review />
        </PrivateRoute>
        <PrivateRoute path='/orderList'>
          <OrderList />
        </PrivateRoute>
        <PrivateRoute path='/addService'>
          <AddService />
        </PrivateRoute>
        <PrivateRoute path='/manageService'>
          <ManageService />
        </PrivateRoute>
        <PrivateRoute path='/makeAdmin'>
          <MakeAdmin />
        </PrivateRoute>
        <Route path='/*'>
          <h1 className='text-center text-danger'>404! Page Not Found!</h1>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
