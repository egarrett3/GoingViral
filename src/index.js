import './styles/index.css';
import './styles/graph.css';
import axios from 'axios';
import graph from './graph';
import getData from './dataCall';

// if (document.querySelector('.state')) {
//     const st = document.querySelector('.state')
//     st.addEventListener('click', e => {
//         e.preventDefault()
//         getData(e.currentTarget.textContent)
//     });
// }

// async function getData(state) {
//     const api_url = `/graph/${state}`;
//     const response = await fetch(api_url);
//     const text = await reponse.text();
//     graph(text);
// }




