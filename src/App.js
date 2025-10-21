// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function Profile() {
  return (
    <img
      src="https://hips.hearstapps.com/hmg-prod/images/small-dogs-whippet-6626b51d9e322.jpg?crop=0.5333333333333333xw:1xh;center,top"
      alt="The dogs"
    />
  );  
}

export default function Gallery() {
  return (
    <section>
      <h1>The Dogs of Europe</h1>
      <h2>Greek Dog</h2><Profile />
      <h2>Germaniad Dog</h2><Profile />
      <h2>Normandia Dog</h2><Profile />
    </section>
  );
}
