import './App.css';
import { Route, Link } from "react-router-dom";
import Mainpage from './components/Mainpage/Mainpage';
import DomesticBoard from './components/DomesticBoard/DomesticBoard';

function App() {
  return (
    <div>

      <Route path="/" exact component={Mainpage} />
      <Route path="/DomesticBoard" component={DomesticBoard} />

    </div>
  );
}

export default App;
