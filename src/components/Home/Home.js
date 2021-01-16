import React from 'react';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
       <header>
         <h1>SCSS workshop!</h1>
         <button>SCSS Rocks</button>
       </header>
       <div className="contact">
         <button>submit</button>
         <div className="info">
           <h2>my contact info</h2>
           <p>This is more info</p>
         </div>
       </div>
    </div>
  );
}

export default Home;
