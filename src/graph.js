import './styles/index.css';
import './styles/graph.css';

export default function(DATA) {
    debugger
const data = DATA;

let d3 = require("d3");

let height = 800;
let width = 1450;
let margin = 200;

function commasForNums(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function clenseDups(data) {
    const distinctVals = [];

    for (let index = 0; index < data.length; index++) {
        if (index !== 0 && secondsEpochToDate(data[index].seconds_since_Epoch) !== secondsEpochToDate(data[index - 1].seconds_since_Epoch)) {
            distinctVals.push(data[index])
        };
    }
    return distinctVals;
}

const distinctValues = clenseDups(data);

function secondsEpochToDate(seconds) {
    let d = new Date(seconds * 1000);
    let dt = d.toLocaleString();
    dt = dt.split(',')

    return dt[0]
}

let svg = d3.select("#graph")
    .append('svg')
    .attr("viewBox", [0, 0, width, height]);

d3.select('svg')
    .attr('height', height)
    .attr('width', width)

svg.append('text')
    .attr('x', 50)
    .attr('y', 50)
    .attr('font-size', '30px')
    .text('Tested,Confirmed,Deaths')

let xScale = d3.scaleBand().range([0, width - margin]).padding(0.09)
    .domain(distinctValues.map(time => secondsEpochToDate(time.seconds_since_Epoch)))


let yScale = d3.scaleLinear().range([height - margin, 0])
    .domain([0, d3.max(distinctValues, function (dt) { return parseInt(dt.tested) })]) 

let g = svg.append("g")
    .attr("transform", "translate(" + 100 + "," + 100 + ")")


let xg = g.append("g")
    .attr("transform", "translate(-1," + (height - margin) + ")")
    .call(d3.axisBottom(xScale))
    .selectAll('text')
    .attr('dx', '-3.2em')
    .attr('dy', '.35em')
    .attr('transform', 'rotate(-70)')

g.append("g")
    .call(d3.axisLeft(yScale))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "-7.1em")
    .attr("text-anchor", "end")
    .attr("stroke", "black")
    .text("Tests");

let div = d3.select('body').append('div')
    .style('opacity', '0')
    .attr('class', 'tooltip')

g.selectAll(".rect")
    .data(distinctValues)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function (distinctValues) { return xScale(secondsEpochToDate(distinctValues.seconds_since_Epoch)) })
    .attr("y", function (distinctValues) { return yScale(distinctValues.tested) })
    .attr("width", xScale.bandwidth())
    .attr("height", function (distinctValues) { return ((height - margin) - yScale(distinctValues.tested)) })
    .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '.85')
        div.transition()
            .duration('50')
            .style('opacity', '1')
        div.html('tested cases: ' + commasForNums(distinctValues[i].tested) + '<br>positive cases: ' +
            commasForNums(distinctValues[i].positive) + '<br>resulting deaths: ' +
            commasForNums(distinctValues[i].deaths))
            .style('left', (d3.event.clientX - 13) + 'px')
            .style('top', (d3.event.clientY - 20) + 'px')
    })
    .on('mouseout', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .attr('opacity', '1')
        div.transition()
            .duration('50')
            .style('opacity', '0')
    });
}