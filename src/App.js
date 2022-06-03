
import './App.css';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home/Home';
import Send from './components/pages/send/Send';
import Services from './components/pages/services/Services';
import About from './components/pages/about/About';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Publication from './components/pages/publication/Publication';
import Author from './components/pages/author/Author';
import Books from './components/pages/books/Books';
import Team from './components/pages/team/Team';
import Contests from './components/pages/contests/Contests';
import Mission from './components/pages/mission/Mission';
import Contact from './components/pages/contact/Contact';


function App() {

  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
      console.log("collapsed: ",menuCollapse);
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  return (
    <div className = "App">
      <Router>
          <Sidebar menuCollapse = {menuCollapse} toggle = {menuIconClick}/>
          <Header toggle = {menuIconClick} />
          <Routes>
            
            <Route path = '/' element = {<Home />}/>
            <Route path = '/publications' element = {<></>}/>
            <Route path = '/send' element = {<Send />}/>
            <Route path = '/services' element = {<Services />}/>
            <Route path = '/About' element = {<About />}/>
            <Route  path = "/publication/:id"  exact element = {<Publication />}/>
            <Route  path = "/author/:id"  exact element = {<Author />}/>
            <Route path = '/books' element = {<Books />} />
            <Route path = '/team' element = {<Team />} />
            <Route path = '/contests' element = {<Contests />} />
            <Route path = '/mission' element = {<Mission />} />
            <Route path = '/contact' element = {<Contact />} />

          </Routes>
        
        <Footer />

      </Router>
    </div>
    
  );
}

export default App;
