import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './Componenet/Header';
import Home from './pages/Home';
import Theme  from './Theme';
import Conatct from './Componenet/Conatct';
// import Silder from './Componenet/Silder'
// import Navbar from './components/Navbar';
import Singup from './pages/Singup';
import Register from './pages/Register';
import Details from './Componenet/Products/Details';





function App() {
  return (
    <div className="App">
    <Router>
      <ThemeProvider theme={Theme}>
        <CssBaseline/>
        <Header/>
        {/* <Navbar/> */}
        {/* <Silder/> */}
   

          <Routes>
         <Route exact path="/" element={<Home />} /> 
          {/* <Route exact path="/About" element={<About />} /> */}
          <Route exact path="/conatct" element={<Conatct/>} />
          <Route exact path="/singup" element={<Singup/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/details" element={<Details/>} />
          </Routes> 
    
          </ThemeProvider>
           </Router>
     
    </div>
  )
}
export default App;
