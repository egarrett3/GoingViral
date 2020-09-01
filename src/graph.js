import './styles/index.css';
import './styles/graph.css';
import renderData from './getStateData';
import axios from 'axios';

export default function() {


const data = [{ seconds_since_Epoch: "1588293736", tested: "177626", positive: "10735", deaths: "199" },
{ seconds_since_Epoch: "1588390979", tested: "186132", positive: "11891", deaths: "204" },
{ seconds_since_Epoch: "1588466696", tested: "196276", positive: "12661", deaths: "209" },
{ seconds_since_Epoch: "1588566059", tested: "204607", positive: "13177", deaths: "210" },
{ seconds_since_Epoch: "1588644423", tested: "211443", positive: "13571", deaths: "219" },
{ seconds_since_Epoch: "1588715179", tested: "211443", positive: "13690", deaths: "226" },
{ seconds_since_Epoch: "1588802043", tested: "227101", positive: "13938", deaths: "239" },
{ seconds_since_Epoch: "1588979282", tested: "243578", positive: "13938", deaths: "241" },
{ seconds_since_Epoch: "1589078462", tested: "243578", positive: "14768", deaths: "242" },
{ seconds_since_Epoch: "1589147222", tested: "243578", positive: "14768", deaths: "243" },
{ seconds_since_Epoch: "1589241602", tested: "273277", positive: "15544", deaths: "251" },
{ seconds_since_Epoch: "1589312822", tested: "273277", positive: "16111", deaths: "265" },
{ seconds_since_Epoch: "1589399942", tested: "273277", positive: "16111", deaths: "273" },
{ seconds_since_Epoch: "1589432157", tested: "292917", positive: "16370", deaths: "273" },
{ seconds_since_Epoch: "1589489402", tested: "302317", positive: "16699", deaths: "287" },
{ seconds_since_Epoch: "1589598483", tested: "309756", positive: "16699", deaths: "290" },
{ seconds_since_Epoch: "1589660762", tested: "309756", positive: "17288", deaths: "295" },
{ seconds_since_Epoch: "1589747643", tested: "309756", positive: "17388", deaths: "298" },
{ seconds_since_Epoch: "1589831762", tested: "337428", positive: "17388", deaths: "298" },
{ seconds_since_Epoch: "1589925870", tested: "346123", positive: "18378", deaths: "305" },
{ seconds_since_Epoch: "1590006183", tested: "346123", positive: "18532", deaths: "309" },
{ seconds_since_Epoch: "1590116371", tested: "360583", positive: "18532", deaths: "313" },
{ seconds_since_Epoch: "1590180182", tested: "360583", positive: "18532", deaths: "315" },
{ seconds_since_Epoch: "1590270782", tested: "373758", positive: "19789", deaths: "315" },
{ seconds_since_Epoch: "1590348543", tested: "383576", positive: "20145", deaths: "336" },
{ seconds_since_Epoch: "1590435122", tested: "396219", positive: "20607", deaths: "338" },
{ seconds_since_Epoch: "1590528063", tested: "396219", positive: "20965", deaths: "338" },
{ seconds_since_Epoch: "1590611582", tested: "409630", positive: "21306", deaths: "353" },
{ seconds_since_Epoch: "1590735542", tested: "415989", positive: "21679", deaths: "356" },
{ seconds_since_Epoch: "1590810783", tested: "421967", positive: "22085", deaths: "360" },
{ seconds_since_Epoch: "1590892082", tested: "421967", positive: "22566", deaths: "364" },
{ seconds_since_Epoch: "1590958502", tested: "435977", positive: "22566", deaths: "364" },
{ seconds_since_Epoch: "1591045983", tested: "448493", positive: "23554", deaths: "367" },
{ seconds_since_Epoch: "1591163692", tested: "448493", positive: "24375", deaths: "367" },
{ seconds_since_Epoch: "1591246544", tested: "470779", positive: "24375", deaths: "388" },
{ seconds_since_Epoch: "1591318485", tested: "470779", positive: "25120", deaths: "388" },
{ seconds_since_Epoch: "1591397313", tested: "470779", positive: "25520", deaths: "408" },
{ seconds_since_Epoch: "1591575844", tested: "498768", positive: "26381", deaths: "418" },
{ seconds_since_Epoch: "1591649535", tested: "498768", positive: "26944", deaths: "418" },
{ seconds_since_Epoch: "1591743909", tested: "498768", positive: "27575", deaths: "435" },
{ seconds_since_Epoch: "1591859710", tested: "528635", positive: "27869", deaths: "436" },
{ seconds_since_Epoch: "1591945215", tested: "535096", positive: "27869", deaths: "441" },
{ seconds_since_Epoch: "1591945349", tested: "535096", positive: "28340", deaths: "441" },
{ seconds_since_Epoch: "1591994337", tested: "594960", positive: "29126", deaths: "441" },
{ seconds_since_Epoch: "1592076211", tested: "601161", positive: "29541", deaths: "472" },
{ seconds_since_Epoch: "1592179639", tested: "615043", positive: "30432", deaths: "475" },
{ seconds_since_Epoch: "1592263325", tested: "629769", positive: "31160", deaths: "475" },
{ seconds_since_Epoch: "1592353089", tested: "638772", positive: "31830", deaths: "493" },
{ seconds_since_Epoch: "1592458898", tested: "638772", positive: "32143", deaths: "493" },
{ seconds_since_Epoch: "1592546398", tested: "652160", positive: "32829", deaths: "493" },
{ seconds_since_Epoch: "1592638516", tested: "667336", positive: "34017", deaths: "515" },
{ seconds_since_Epoch: "1592686118", tested: "667336", positive: "34446", deaths: "524" },
{ seconds_since_Epoch: "1592796215", tested: "685381", positive: "35102", deaths: "526" },
{ seconds_since_Epoch: "1592885197", tested: "699854", positive: "35553", deaths: "526" },
{ seconds_since_Epoch: "1592952826", tested: "705164", positive: "36303", deaths: "542" },
{ seconds_since_Epoch: "1593032168", tested: "718038", positive: "37235", deaths: "556" },
{ seconds_since_Epoch: "1593149531", tested: "727268", positive: "38034", deaths: "567" },
{ seconds_since_Epoch: "1593207668", tested: "741737", positive: "38034", deaths: "577" },
{ seconds_since_Epoch: "1593398068", tested: "748229", positive: "40172", deaths: "584" },
{ seconds_since_Epoch: "1593522692", tested: "748229", positive: "42297", deaths: "592" },
{ seconds_since_Epoch: "1593583472", tested: "792779", positive: "42297", deaths: "604" },
{ seconds_since_Epoch: "1593666193", tested: "792779", positive: "45315", deaths: "609" },
{ seconds_since_Epoch: "1593783899", tested: "792779", positive: "45315", deaths: "620" },
{ seconds_since_Epoch: "1593925857", tested: "792779", positive: "50140", deaths: "637" },
{ seconds_since_Epoch: "1593981573", tested: "895796", positive: "50140", deaths: "637" },
{ seconds_since_Epoch: "1594100670", tested: "904237", positive: "52155", deaths: "653" },
{ seconds_since_Epoch: "1594270842", tested: "950540", positive: "55986", deaths: "685" },
{ seconds_since_Epoch: "1594333732", tested: "950540", positive: "55986", deaths: "710" },
{ seconds_since_Epoch: "1594442994", tested: "950540", positive: "59546", deaths: "723" },
{ seconds_since_Epoch: "1594563170", tested: "950540", positive: "59546", deaths: "738" },
{ seconds_since_Epoch: "1594610112", tested: "1017498", positive: "61960", deaths: "741" },
{ seconds_since_Epoch: "1594674493", tested: "1053424", positive: "65274", deaths: "741" },
{ seconds_since_Epoch: "1594766481", tested: "1053424", positive: "66788", deaths: "741" },
{ seconds_since_Epoch: "1594849830", tested: "1053424", positive: "66788", deaths: "783" },
{ seconds_since_Epoch: "1594948418", tested: "1053424", positive: "66788", deaths: "796" },
{ seconds_since_Epoch: "1595024039", tested: "1053424", positive: "73819", deaths: "815" },
{ seconds_since_Epoch: "1595205248", tested: "1196543", positive: "78115", deaths: "843" },
{ seconds_since_Epoch: "1595281176", tested: "1196543", positive: "79754", deaths: "843" },
{ seconds_since_Epoch: "1595390868", tested: "1237411", positive: "81944", deaths: "871" },
{ seconds_since_Epoch: "1595473333", tested: "1262993", positive: "84417", deaths: "871" },
{ seconds_since_Epoch: "1595574019", tested: "1295115", positive: "86987", deaths: "925" },
{ seconds_since_Epoch: "1595661021", tested: "1321707", positive: "89078", deaths: "925" },
{ seconds_since_Epoch: "1595747687", tested: "1331428", positive: "90796", deaths: "964" },
{ seconds_since_Epoch: "1595813033", tested: "1381859", positive: "93936", deaths: "967" },
{ seconds_since_Epoch: "1595913469", tested: "1381859", positive: "96489", deaths: "978" },
{ seconds_since_Epoch: "1595994155", tested: "1435433", positive: "99044", deaths: "999" },
{ seconds_since_Epoch: "1596056673", tested: "1455120", positive: "100822", deaths: "999" },
{ seconds_since_Epoch: "1596168831", tested: "1455120", positive: "102871", deaths: "1033" },
{ seconds_since_Epoch: "1596260056", tested: "1512224", positive: "105959", deaths: "1033" },
{ seconds_since_Epoch: "1596383894", tested: "1541615", positive: "108184", deaths: "1033" },
{ seconds_since_Epoch: "1596415679", tested: "1561021", positive: "109627", deaths: "1033" },
{ seconds_since_Epoch: "1596503432", tested: "1573222", positive: "110636", deaths: "1092" },
{ seconds_since_Epoch: "1596602285", tested: "1591310", positive: "110636", deaths: "1092" },
{ seconds_since_Epoch: "1596678998", tested: "1610604", positive: "114098", deaths: "1092" },
{ seconds_since_Epoch: "1596762464", tested: "1633642", positive: "116350", deaths: "1186" },
{ seconds_since_Epoch: "1596860118", tested: "1633642", positive: "118782", deaths: "1206" },
{ seconds_since_Epoch: "1597040670", tested: "1711319", positive: "122712", deaths: "1223" },
{ seconds_since_Epoch: "1597217584", tested: "1738875", positive: "124915", deaths: "1223" },
{ seconds_since_Epoch: "1597290649", tested: "1757690", positive: "126393", deaths: "1289" }]

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

let svg = d3.select("body")
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
// .domain(d3.range(data.length))

// let xDates = d3.scaleBand().range([0, width - margin]).padding(0.2)
//     .domain(data.map(time => secondsEpochToDate(time.seconds_since_Epoch)))

let yScale = d3.scaleLinear().range([height - margin, 0])
    .domain([0, d3.max(distinctValues, function (dt) { return parseInt(dt.tested) })]) // figure out a linear scale for domain height

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
    // .attr("x", function (data,i) { return xScale(i) })
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