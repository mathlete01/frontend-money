import React from "react";
import logo from "./logo.svg";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <div>
      <Body />
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route exact path='/' component={ Body } />
//       </div>
//     </Router>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Body />
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

export default App;
