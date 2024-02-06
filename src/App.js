//App.js
import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import List from './pages/List.js';
import ListItem from './pages/ListItem.js';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.js'; //import d'un component

function App() {


return (
    <div className="App">
        {/* Si je souhaite importer des components (autre que des pages) je le fais en dehors de "Routes"  */}
        <Navbar />

        <Routes>
            <Route path="/"  element={<Home />}/> 
            {/* Parent avec une balise fermante et ouvrante qui contient un child  */}
            <Route path="/list"  element={<List />}>
                <Route path=":id"  element={<ListItem />} />
            </Route>
        </Routes> 
    </div>
);
}

export default App;