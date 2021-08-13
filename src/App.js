import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NoutFound';
import ModelProvider from './context/providers/ModelProvider';
import Nav from './components/Nav';
import NavProvider from './context/providers/NavProvider'
import Toggle from './components/Toggle';
import DestinationProvider from './context/providers/DestinationProvider';
import Details from './pages/Details';
import SharedProvider from './context/providers/SharedProvider';
import AnimationProvider from './context/providers/AnimationProvider';

function App() {


  return (
    
    <Router>
      <ModelProvider>
        <NavProvider>
          <DestinationProvider>
            <SharedProvider>
              <AnimationProvider>
          <Toggle/>
          <Nav/>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" exact component={About} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/details/:id" exact component={Details} />
                  <Route component={NotFound}/>
              </Switch>
                  </AnimationProvider>
                 </SharedProvider>
              </DestinationProvider>
          </NavProvider>
      </ModelProvider>
      
    </Router>
  );
}

export default App;
