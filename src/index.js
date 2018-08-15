import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "./components/counter";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
