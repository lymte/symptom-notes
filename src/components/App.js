import './App.css';
import AboutUs from './aboutus/AboutUs'
import ListPage from './list/ListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">

        <Routes>
          <Route exact path='/' element={ <AboutUs /> }/>
          <Route exact path='/list' element={ <ListPage /> }/>
        </Routes>
  
    </div>
    </Router>
    
  );
}

export default App;
