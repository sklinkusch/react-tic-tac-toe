import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";

// ========================================

ReactDOM.render(
  React.createElement(Game, null),
  document.getElementById("root")
);

// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }
