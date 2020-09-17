import './styles/index.css';
import './styles/graph.css';

function pageLocation() {
    let curr = location.href;
    if (curr.includes('graph')) {
        return true;
    } else {
        return false;
    }
}

async function removeChildren() {
    document.querySelectorAll('rect').forEach(r => r.parentNode.removeChild(r))
    document.querySelectorAll('.rate').forEach(r => r.parentNode.removeChild(r))
    document.querySelectorAll('#state-borders').forEach(r => r.parentNode.removeChild(r))
}

function loadUSAData() {
    makeAMap();
    getCountry();
}

window.addEventListener('beforeunload', function () {
    removeChildren();
});

if (pageLocation()) {
    window.addEventListener('load', function() {
        loadUSAData();
    });
} 


if (document.getElementById("scroll")) {
    addEventListener("scroll", function () {})
}


function transitionTiming() { 
    if (document.querySelector('.state')) {
        [...document.querySelectorAll('.state')].forEach(function (stadt) {
            stadt.addEventListener('click', e => {
                e.preventDefault();
                transitionDown();
                setTimeout(removeChildren,1500);
                setTimeout(getState.bind(null,e.currentTarget.textContent),1800);
                setTimeout(makeAMap.bind(null,e.currentTarget.textContent),1800);
            });
        })
    }
}


transitionTiming()


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
