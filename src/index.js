import './styles/index.css';
import './styles/graph.css';
import { transition } from 'd3';


function getGraph() {
    localStorage.getItem('graph')
}

function setGraphTrue() {
    localStorage.setItem('graph', 'true')
}

function setGraphFalse() {
    localStorage.setItem('graph', 'false');
}

async function removeChildren() {
    document.querySelectorAll('rect').forEach(r => r.parentNode.removeChild(r))
    document.querySelectorAll('.headers').forEach(r => r.parentNode.removeChild(r))
    document.querySelectorAll('#states').forEach(r => r.parentNode.removeChild(r))
    document.querySelectorAll('#state-borders').forEach(r => r.parentNode.removeChild(r))
}

function loadUSAData() {
    window.addEventListener('load', () => {
        makeAMap();
        getCountry();
    });
    setGraphTrue();
}

document.getElementById("scroll").addEventListener("scroll", function () {})

function transitionTiming() { 
    if (document.querySelector('.state')) {
        [...document.querySelectorAll('.state')].forEach(function (stadt) {
            stadt.addEventListener('click', e => {
                e.preventDefault();
                transitionDown();
                setTimeout(removeChildren,1500);
                setTimeout(getState.bind(null,e.currentTarget.textContent),2100);
                setTimeout(makeAMap.bind(null,e.currentTarget.textContent),2100);
            });
        })
        setGraphTrue();
    }
}

transitionTiming()

if (getGraph()) {
    window.addEventListener('unload', function () {
        removeChildren();
    });
    setGraphFalse();
} else {
    loadUSAData();
    setGraphTrue();
}

async function getState(state) {
    const api_url = `/graph/${state}`;
    const response = await fetch(api_url);
    const text = await response.text();
    graph(text);
}

async function getCountry() {
    const api_url = `/nation`;
    const response = await fetch(api_url);
    const text = await response.text();
    graph(text);
}
