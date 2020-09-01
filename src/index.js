import './styles/index.css';
import './styles/graph.css';
import renderData from './getStateData';
import axios from 'axios';
import graph from './graph';

window.addEventListener("DOMContentLoaded", () => {
    graph();
    // renderData("CA");
});
