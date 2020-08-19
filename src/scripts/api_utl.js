var d3 = require("d3");

function fetchUSACovidByState(state) {
    debugger
    let request = new XMLHttpRequest();
    request.open('GET', `https://coronavirusapi.com/getTimeSeries/${state}`);
    request.send();
    request.onload = () => {
        console.log(request)
        if (request.status === 200) {
            console.log(d3.csvParse(request.response));
        } else {
            console.log(`error ${request.status} ${request.statusText}`)
        }
    }

}

export default fetchUSACovidByState;