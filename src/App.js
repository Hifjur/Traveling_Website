import './App.css';
import Header from './pages/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import NotFound from './pages/NotFound/NotFound';
import ServiceDetail from './pages/Home/Services/ServiceDetail/ServiceDetail';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyPackages from './pages/MyPackages/MyPackages';
import AddNewPlace from './pages/AddNewPlace/AddNewPlace';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/service/serviceDetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/myPackages">
              <MyPackages></MyPackages>
            </PrivateRoute>
            <PrivateRoute path="/addNewPlace">
              <AddNewPlace></AddNewPlace>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;