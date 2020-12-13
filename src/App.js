import './App.css';



import {BrowserRouter as Router,Link, Switch,Route,Redirect} from 'react-router-dom';


function App() {
  return (
    <Router>

      <Redirect from='/' to='/Home'/>

      <Link to="/Home">Home</Link>
      <p></p>
      <Link to="/AboutUs">About Us</Link>
      <Switch>

        <Route path="/Home">
            <div>
              Home
            </div>
        </Route>

        <Route path="/AboutUs">
            <div>
              About Us
            </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;