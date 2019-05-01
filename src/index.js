import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6 px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>
      Home
    </NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'darkBlue'}}>
      About
    </NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkBlue'}}>
      Login
    </NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{background: 'darkBlue'}}>
      Signup
    </NavLink>
    <NavLink to="/messages" exact style={link} activeStyle={{background: 'darkBlue'}}>
      Messages
    </NavLink>
  </div>;

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const Signup = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Create username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Create password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
    </div>
  );
};

const Messages = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Title" />
          <label htmlFor="username">Title</label>
        </div>
        <div>
          <input type="textarea" name="textarea" placeholder="Story" />
          <label htmlFor="password">Story</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
      <Route exact path="/signup" render={Signup} />
      <Route exact path="/messages" render={Messages} />
    </React.Fragment>
  </Router>
  ),
  document.getElementById('root')
);
