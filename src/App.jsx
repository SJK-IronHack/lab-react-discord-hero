import { useState } from 'react'
import Logo1 from './assets/logo1.png'
import illu from './assets/illu.png'
import menu from './assets/menu.png'
import './App.css'

function App() {
// test 
  return (
    <div className="App">
      <div className="body">
        <div className="navbar">
          <img src={Logo1} alt='logo' />
          <img src={menu} alt='logo' />
        </div>
        <div className="mainContent">
          <h1>Imagine a chance...</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, tenetur quisquam possimus aut qui tempora cumque illo labore facere quaerat ut, laudantium nam, necessitatibus quibusdam? Perferendis deleniti ex corporis inventore.</p>
          <button className="mac">Download for Mac</button>
          <button className="win">Download for Win</button>
        </div>
          <div className="illu"><img src={illu} alt="" /></div>

      </div>

    </div>
  );
}


export default App
