var d3 = require("d3");

class Graph {
    constructor() {
       
    }

    formGelements() {
        const svg = d3.create('svg')
            .attr('viewbox', [0,0,300,300]);
        
        
    }

    formBar(coronaData) {
        const bar = selectAll('g')
                .attr('fill',(d,i) => this.orangeRange(i))
            .selectAll('bar')
            .data(coronaData)
            .join()
    }

    orangeRange(index) {
        d3.scaleLinear(d3.interpolateOranges).domain([0.1*index,index]);
    }
    

}

export default Graph;