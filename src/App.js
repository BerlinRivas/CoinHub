// import Header from "./Header"
// import Explore from "./pages/Explore";
// // import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import CryptoHistory from "./pages/CryptoHistory";
// import {Route, Routes} from "react-router-dom"
// import { Chart } from "chart.js";
// // import cryptoData from './data/data.json'

// import './App.css';
// import './Contact.css'

// function App() {

//   return (
//    <>
   
//     <Header />
//     <div className="container">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Chart" element={<Chart />}/>
//         <Route path="/Explore" element={<Explore />} />
//         {/* <Route path="/Contact" element={<Contact />} /> */}
//         <Route path="/CryptoHistory" element={<CryptoHistory />}/>
//       </Routes>
//       </div>
//    </>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Explore from './pages/Explore';
import Home from './pages/Home';
import CryptoHistory from './pages/CryptoHistory';
import CryptoChart from './pages/CryptoChart';
import './App.css';
import './Contact.css';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chart" element={<CryptoChart />} />
          <Route path="/Explore" element={<Explore />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/CryptoHistory" element={<CryptoHistory />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



