import Space from './Images/space.jpg';
import './App.css';
import SortingActivity from './components/SortingActivity';
import LoopsActivity from './components/LoopsActivity';
import VariablesActivity from './components/VariableActivity'
import ConditionalActivity from './components/ConditionalActivity'
import { Router, Route, browserHistory } from 'react-router';
import SingleLoopActivity from './components/SingleLoopActivity';

function App() {
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: "url(" + Space + ")",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
          height: "100vh",
          color: "white",
          overflow: "scroll"
        }}>
        <Router history={browserHistory} >

          <Route path='/' component={() => <VariablesActivity />} />

          <Route path='/conditional' component={() => <ConditionalActivity />} />

          <Route path='/singleloop' component={() => <SingleLoopActivity />} />

          <Route path='/loops' component={() => <LoopsActivity />} />

          <Route path='/sorting' component={() => <SortingActivity />} />

        </Router>
      </div>
    </div>
  );
}

export default App;