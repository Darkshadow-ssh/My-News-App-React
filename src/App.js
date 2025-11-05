import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './sb.css'; 

const App = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
   const stars = Array.from({ length: 100 }, (_, i) => <div key={i} className="star"></div>);
  
    return (  
      <div className="stars-container">
        {stars}
            {stars}
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="top" country="in" category="top"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business"  country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment"  country="in" category="entertainment"/></Route> 
          <Route exact path="/top"><News setProgress={setProgress} apiKey={apiKey} key="top"  country="in" category="top"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports"  country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology"  country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;