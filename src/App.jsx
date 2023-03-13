import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import TutorialsList  from './components/TutorialsList';
import { useState } from 'react';
import UpdateTutorial from './components/UpdateTutorial';
 
function App() {

  const [showAddForm, setShowAddForm] = useState(false);


  return (
    <>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown Menu
          </a>
          <ul className="dropdown-menu">
            <li><Link to='/' className="dropdown-item">Tuto List</Link></li>
            <li onClick={()=>setShowAddForm(true)} className="dropdown-item">Add Tuto</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Routes>
  <Route path="/" element={<TutorialsList showAddForm={showAddForm}/>}/>
  <Route path={"/tutorial-update/:id"} element={<UpdateTutorial/>}/>

</Routes>




    
    </>

  );
}

export default App;
