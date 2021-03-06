
import LoginRegistration from './components/LoginRegistration';

import Nav from './components/Navbar'

import {   BrowserRouter as Router,  Switch,  Route } from "react-router-dom";
import PostIdeas from './components/PostIdeas';
import DetaillsIdeas from './components/DetaillsIdeas';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div className="App">    
    <Router>
        <Nav /> 
      <Switch>
          <Route exact path="/">
              <LoginRegistration />
          </Route>
          <Route exact path="/newIdeas">
              <PostIdeas />
          </Route>
          <Route exact path="/idea/detaills/:id">
              <DetaillsIdeas />
          </Route>
          <Route exact path="/profile/detaills/:id">
              <UserProfile />
          </Route>
      </Switch>
    </Router>
    
   
    </div>
  );
}

export default App;
