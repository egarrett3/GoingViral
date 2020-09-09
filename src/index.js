import './styles/index.css';
import './styles/graph.css';



function getGraph() {
    localStorage.getItem('graph')
}

function setGraphTrue() {
    localStorage.setItem('graph', 'true')
}

function setGraphFalse() {
    localStorage.setItem('graph', 'false');
}

function removeChildren() {
    let grph = document.querySelector('svg');

    while (grph.firstChild) {
        grph.removeChild(grph.firstChild)
    }
}

function loadUSAData() {
    window.addEventListener('load', () => {
        makeAMap();
        getCountry();
    });
    setGraphTrue();
}

document.getElementById("scroll").addEventListener("scroll", function () { })

if (document.querySelector('.state')) {
    [...document.querySelectorAll('.state')].forEach(function (stadt) {
        stadt.addEventListener('click', e => {
            e.preventDefault();
            removeChildren();
            getState(e.currentTarget.textContent)
            makeAMap(e.currentTarget.textContent)
        });
    })
    setGraphTrue();
}

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
