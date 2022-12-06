import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "./Styles/styles.scss"
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import {BrowserRouter as Router} from "react-router-dom"
import RoutesComponent from './components/RoutesComponent';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <RoutesComponent/>
        <Footer/>
      </Router></div>
  );
}

export default App;
