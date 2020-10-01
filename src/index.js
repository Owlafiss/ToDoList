import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ToDoList from "./Components/ToDoList";

var destination = document.getElementById('container');

ReactDOM.render(
    <ToDoList/>,
    destination
);